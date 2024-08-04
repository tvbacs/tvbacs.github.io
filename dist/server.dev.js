"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var path = require('path');

var mysql = require('mysql2');

var bodyParser = require('body-parser');

var session = require('express-session');

var multer = require('multer');
/*
const db = mysql.createConnection({
  host: 'localhost',
  user: 'cob_database',
  password: 'cob_database@2024',
  database: 'cob_database'
});
*/
// Configure Multer for file uploads


var storage = multer.memoryStorage();
var upload = multer({
  storage: storage
});
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cob_database'
});
var app = express();
var port = process.env.PORT || 1613; // Middleware setup

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express["static"](path.join(__dirname, 'public')));
app.use(session({
  secret: 'your-secret-key',
  // Change this to a long random string
  resave: false,
  saveUninitialized: true
}));
app.use('/assets', express["static"](path.join(__dirname, 'assets')));
app.use('/index.html', express["static"](path.join(__dirname, 'index.html')));
db.connect(function (err) {
  if (err) throw err;
  console.log('Connected to the database');
}); // Serve the main page

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
}); // Login endpoint

app.post('/api/login', function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;
  console.log('Received POST /api/login with data:', {
    username: username,
    password: password
  });
  db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function (err, result) {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log('Database query result:', result);

    if (result.length > 0) {
      var user = result[0];
      req.session.user = {
        fullname: user.fullname,
        email: user.email,
        username: user.username,
        reward: user.reward,
        bio: user.bio,
        avatar: user.avatar
      };
      res.redirect('/index.html');
    } else {
      res.redirect('/assets/html/login.html?loginFailed=true');
    }
  });
});
app.get('/api/checkAuth', function (req, res) {
  if (req.session.user) {
    var user = req.session.user;
    var avatarBase64 = user.avatar ? Buffer.from(user.avatar, 'binary').toString('base64') : null;
    res.json({
      success: true,
      user: _objectSpread({}, user, {
        avatar: avatarBase64
      })
    });
  } else {
    res.json({
      success: false
    });
  }
}); // Serve index.html only if the user is authenticated

app.get('/index.html', isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
}); // Signup endpoint

app.post('/api/signup', function (req, res) {
  var _req$body2 = req.body,
      fullname = _req$body2.fullname,
      email = _req$body2.email,
      username = _req$body2.username,
      password = _req$body2.password;
  db.query('INSERT INTO user (fullname, email, username, password) VALUES (?, ?, ?, ?)', [fullname, email, username, password], function (err, result) {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.redirect('/assets/html/signup.html?signupFailed=true');
      return;
    }

    res.redirect('/assets/html/login.html');
  });
}); // Contact form endpoint

app.post('/api/contact', function (req, res) {
  var _req$body3 = req.body,
      name = _req$body3.name,
      email = _req$body3.email,
      member = _req$body3.member,
      opinion = _req$body3.opinion; // Validate form data

  if (!name || !email || !opinion) {
    res.status(400).send('Name, Email, and Opinion are required fields.');
    return;
  } // Insert form data into the database


  var query = 'INSERT INTO contact (name, email, member, opinion) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, member, opinion], function (err, result) {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.redirect('/assets/html/contact.html?sendcontactFailed=true');
      return;
    }

    res.redirect('/assets/html/contact.html?sendcontactFailed=0987');
  });
});
app.post('/api/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Failed to log out'
      });
    }

    res.json({
      success: true
    });
  });
}); //profile 

app.set('view engine', 'ejs');

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/assets/html/login.html');
  }
}

app.get('/profile', isAuthenticated, function (req, res) {
  var user = req.session.user;

  if (!user) {
    res.redirect('\assets\html\login.html');
    return;
  } // Convert avatar buffer to base64 string if it exists


  var avatarBase64 = user.avatar ? Buffer.from(user.avatar.data).toString('base64') : null;
  var data = {
    fullname: user.fullname,
    username: user.username,
    email: user.email,
    reward: '100',
    bio: user.bio,
    avatar: avatarBase64 // Provide default avatar if none exists

  };
  res.render('profile', data);
});
app.get('/contact', function (req, res) {
  res.render('contact');
});
app.get('/booking', function (req, res) {
  res.render('booking');
}); // Route to create a new post

app.post('/api/postDiary', upload.single('photo'), function (req, res) {
  var description = req.body.description;
  var photo = req.file.buffer;
  var user = req.session.user; // Insert post data into database

  var query = 'INSERT INTO post_diary (username, description, photo) VALUES (?, ?, ?)';
  db.query(query, [user.username, description, photo], function (err, result) {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({
        success: false,
        error: 'Failed to insert data into database'
      });
      return;
    }

    res.json({
      success: true
    });
  });
}); // Endpoint to fetch diary posts

app.get('/api/posts', function (req, res) {
  var username = req.session.user.username; // Lấy tên người dùng từ phiên làm việc

  if (!username) {
    res.status(400).json({
      success: false,
      error: 'Username is required'
    });
    return;
  }

  db.query('SELECT * FROM post_diary WHERE username = ?', [username], function (err, results) {
    if (err) {
      console.error('Error fetching posts:', err);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch posts from database'
      });
      return;
    } // Map the results to send back to client


    var posts = results.map(function (post) {
      return {
        id: post.id,
        username: post.username,
        description: post.description,
        photo: post.photo.toString('base64') // Convert Buffer to base64 string for image

      };
    });
    res.json({
      success: true,
      posts: posts
    });
  });
});
app.post('/api/postInspiration', upload.single('photo'), function (req, res) {
  var _req$body4 = req.body,
      description = _req$body4.description,
      place = _req$body4.place,
      country = _req$body4.country;
  var photo = req.file.buffer; // Assuming multer middleware is used to handle file upload
  // Insert inspiration data into database

  var query = 'INSERT INTO post_inspiration (username, description, place, country, photo) VALUES (?, ?, ?, ?, ?)';
  var user = req.session.user; // Assuming user is authenticated and stored in session

  db.query(query, [user.username, description, place, country, photo], function (err, result) {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({
        success: false,
        error: 'Failed to insert data into database'
      });
      return;
    }

    console.log('Inspiration posted successfully');
    res.json({
      success: true
    });
  });
}); // Endpoint to fetch inspiration posts

app.get('/api/postsInspiration_load', function (req, res) {
  var user = req.session.user; // Check if user is authenticated

  if (!user) {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized'
    });
  } // Query to fetch posts for the authenticated user


  var query = 'SELECT * FROM post_inspiration WHERE username = ?';
  db.query(query, [user.username], function (err, results) {
    if (err) {
      console.error('Error fetching posts:', err);
      return res.status(500).json({
        success: false,
        error: 'Failed to fetch posts'
      });
    } // Map the results to include base64 encoded photo field


    var posts = results.map(function (post) {
      return {
        username: post.username,
        description: post.description,
        photo: post.photo.toString('base64'),
        // Convert Buffer to base64 string
        love: post.love,
        place: post.place,
        country: post.country
      };
    }); // Send the response with the mapped posts

    res.json({
      success: true,
      posts: posts
    });
  });
}); // POST route to handle profile picture upload

app.post('/uploadAvatar', isAuthenticated, upload.single('avatar'), function (req, res) {
  var user = req.session.user;

  if (!user) {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }

  if (!req.file) {
    return res.status(400).json({
      message: 'Please select an image file.'
    });
  } // Get the file data from req.file.buffer


  var avatarData = req.file.buffer;
  db.query('UPDATE user SET avatar = ? WHERE username = ?', [avatarData, user.username], function (err, result) {
    if (err) {
      console.error('Error updating avatar in the database:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to update avatar.'
      });
    }

    res.json({
      success: true,
      message: 'Avatar updated successfully.'
    });
  });
});
app.post('/uploadAvatar', isAuthenticated, upload.single('avatar'), function (req, res) {
  var user = req.session.user;

  if (!user) {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }

  if (!req.file) {
    return res.status(400).json({
      message: 'Please select an image file.'
    });
  } // Get the file data from req.file.buffer


  var avatarData = req.file.buffer;
  db.query('UPDATE user SET avatar = ? WHERE username = ?', [avatarData, user.username], function (err, result) {
    if (err) {
      console.error('Error updating avatar in the database:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to update avatar.'
      });
    }

    var avatarBase64 = avatarData.toString('base64');
    res.json({
      success: true,
      avatarBase64: avatarBase64
    });
  });
}); // GET route to retrieve avatar

app.get('/getAvatar', isAuthenticated, function (req, res) {
  var user = req.session.user;

  if (!user) {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }

  db.query('SELECT avatar FROM user WHERE username = ?', [user.username], function (err, results) {
    if (err) {
      console.error('Error fetching avatar from the database:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch avatar.'
      });
    }

    if (results.length > 0) {
      var avatarData = results[0].avatar;
      var avatarBase64 = avatarData.toString('base64');
      res.json({
        success: true,
        avatar: avatarBase64
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Avatar not found.'
      });
    }
  });
}); // Start the server

app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});
//# sourceMappingURL=server.dev.js.map
