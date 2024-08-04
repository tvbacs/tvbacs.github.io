const express = require('express');
const path = require('path');
const mysql = require('mysql2')
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');

/*
const db = mysql.createConnection({
  host: 'localhost',
  user: 'cob_database',
  password: 'cob_database@2024',
  database: 'cob_database'
});
*/

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const db = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cob_database'
});

const app = express();
const port = process.env.PORT || 1613;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'your-secret-key', // Change this to a long random string
  resave: false,
  saveUninitialized: true
}));


app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/index.html', express.static(path.join(__dirname, 'index.html')));


db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  console.log('Received POST /api/login with data:', { username, password });

  db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log('Database query result:', result);

    if (result.length > 0) {
      const user = result[0];
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

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/assets/html/login.html');
  }
}

app.get('/api/checkAuth', (req, res) => {
  if (req.session.user) {
    const user = req.session.user;
    const avatarBase64 = user.avatar ? Buffer.from(user.avatar, 'binary').toString('base64') : null;
    res.json({ success: true, user: { ...user, avatar: avatarBase64 } });
  } else {
    res.json({ success: false });
  }
});


// Serve index.html only if the user is authenticated
app.get('/index.html', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Signup endpoint
app.post('/api/signup', (req, res) => {
  const { fullname, email, username, password } = req.body;

  db.query('INSERT INTO user (fullname, email, username, password) VALUES (?, ?, ?, ?)', [fullname, email, username, password], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.redirect('/assets/html/signup.html?signupFailed=true');
      return;
    }
    res.redirect('/assets/html/login.html');
  });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, member, opinion } = req.body;

  // Validate form data
  if (!name || !email || !opinion) {
    res.status(400).send('Name, Email, and Opinion are required fields.');
    return;
  }

  // Insert form data into the database
  const query = 'INSERT INTO contact (name, email, member, opinion) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, member, opinion], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.redirect('/assets/html/contact.html?sendcontactFailed=true');
      return;
    }
    res.redirect('/assets/html/contact.html?sendcontactFailed=0987');
    
  });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to log out' });
    }
    res.json({ success: true });
  });
});


//profile 
app.set('view engine', 'ejs');

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/assets/html/login.html');
  }
}


app.get('/profile', isAuthenticated, (req, res) => {
  const user = req.session.user;
  if (!user) {
    res.redirect('\assets\html\login.html');
    return;
  }

  
  // Convert avatar buffer to base64 string if it exists
  const avatarBase64 = user.avatar ? Buffer.from(user.avatar.data).toString('base64') : null;

  const data = {
    fullname: user.fullname,
    username: user.username,
    email: user.email,
    reward: '100',
    bio: user.bio,
    avatar: avatarBase64// Provide default avatar if none exists
  };
  res.render('profile', data);
});


app.get('/contact', (req, res) => {
  res.render('contact');
});
app.get('/traveling', (req, res) => {
  res.render('traveling');
});
app.get('/inspiration', (req, res) => {
  res.render('inspiration');
});



// Route to create a new post
app.post('/api/postDiary', upload.single('photo'), (req, res) => {
  const { description } = req.body;
  const photo = req.file.buffer;
  const user = req.session.user;
  
  // Insert post data into database
  const query = 'INSERT INTO post_diary (username, description, photo) VALUES (?, ?, ?)';
  db.query(query, [user.username, description, photo], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({ success: false, error: 'Failed to insert data into database' });
      return;
    }
    res.json({ success: true });
  });
});

// Endpoint to fetch diary posts
app.get('/api/posts', (req, res) => {
  const username = req.session.user.username; // Lấy tên người dùng từ phiên làm việc

  if (!username) {
    res.status(400).json({ success: false, error: 'Username is required' });
    return;
  }

  db.query('SELECT * FROM post_diary WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Error fetching posts:', err);
      res.status(500).json({ success: false, error: 'Failed to fetch posts from database' });
      return;
    }

    // Map the results to send back to client
    const posts = results.map(post => ({
      id: post.id,
      username: post.username,
      description: post.description,
      photo: post.photo.toString('base64') // Convert Buffer to base64 string for image
    }));
    res.json({ success: true, posts });
  });
});










app.post('/api/postInspiration', upload.single('photo'), (req, res) => {
  const { description, place, country } = req.body;
  const photo = req.file.buffer; // Assuming multer middleware is used to handle file upload


  // Insert inspiration data into database
  const query = 'INSERT INTO post_inspiration (username, description, place, country, photo) VALUES (?, ?, ?, ?, ?)';
  const user = req.session.user; // Assuming user is authenticated and stored in session

  db.query(query, [user.username, description, place, country, photo], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({ success: false, error: 'Failed to insert data into database' });
      return;
    }
    console.log('Inspiration posted successfully');
    res.json({ success: true });
  });
});


// Endpoint to fetch inspiration posts
app.get('/api/postsInspiration_load', (req, res) => {
  const user = req.session.user;

  // Check if user is authenticated
  if (!user) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  // Query to fetch posts for the authenticated user
  const query = 'SELECT * FROM post_inspiration WHERE username = ?';
  db.query(query, [user.username], (err, results) => {
    if (err) {
      console.error('Error fetching posts:', err);
      return res.status(500).json({ success: false, error: 'Failed to fetch posts' });
    }

    // Map the results to include base64 encoded photo field
    const posts = results.map(post => ({
      username: post.username,
      description: post.description,
      photo: post.photo.toString('base64'), // Convert Buffer to base64 string
      love: post.love,
      place: post.place,
      country: post.country
    }));
    // Send the response with the mapped posts
    res.json({ success: true, posts });
  });
});

// POST route to handle profile picture upload
app.post('/uploadAvatar', isAuthenticated, upload.single('avatar'), (req, res) => {
  const user = req.session.user;

  if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!req.file) {
      return res.status(400).json({ message: 'Please select an image file.' });
  }

  // Get the file data from req.file.buffer
  const avatarData = req.file.buffer;

  db.query('UPDATE user SET avatar = ? WHERE username = ?', [avatarData, user.username], (err, result) => {
      if (err) {
          console.error('Error updating avatar in the database:', err);
          return res.status(500).json({ success: false, message: 'Failed to update avatar.' });
      }

      res.json({ success: true, message: 'Avatar updated successfully.' });
  });
});


app.post('/uploadAvatar', isAuthenticated, upload.single('avatar'), (req, res) => {
  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!req.file) {
    return res.status(400).json({ message: 'Please select an image file.' });
  }

  // Get the file data from req.file.buffer
  const avatarData = req.file.buffer;
  
  db.query('UPDATE user SET avatar = ? WHERE username = ?', [avatarData, user.username], (err, result) => {
    if (err) {
      console.error('Error updating avatar in the database:', err);
      return res.status(500).json({ success: false, message: 'Failed to update avatar.' });
    }

    const avatarBase64 = avatarData.toString('base64');
    res.json({ success: true, avatarBase64 });
  });
});

// GET route to retrieve avatar
app.get('/getAvatar', isAuthenticated, (req, res) => {
  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  db.query('SELECT avatar FROM user WHERE username = ?', [user.username], (err, results) => {
    if (err) {
      console.error('Error fetching avatar from the database:', err);
      return res.status(500).json({ success: false, message: 'Failed to fetch avatar.' });
    }

    if (results.length > 0) {
      const avatarData = results[0].avatar;
      const avatarBase64 = avatarData.toString('base64');
      res.json({ success: true, avatar: avatarBase64 });
    } else {
      res.status(404).json({ success: false, message: 'Avatar not found.' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});