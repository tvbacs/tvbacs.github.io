const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 1511;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the profile page with a test variable
app.get('/profile', (req, res) => {
  const testData = {
    fullname: 'Quang Hoang',
    username: 'qhoang1050',
    email: 'qhoang1525@gmail.com',
    password: '123456789', // Note: Be cautious with sending passwords to the frontend
    reward: '100',
    bio: 'Experience the diversity of life, learn from the little things, constantly explore and grow with every step taken.',
    avatar: null
  };
  res.render('profile', testData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
