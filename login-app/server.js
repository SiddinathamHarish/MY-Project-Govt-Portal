// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Replace with your own logic
  if (username === 'admin' && password === '1234') {
    res.send('✅ Login successful!');
  } else {
    res.send('❌ Login failed. Try again.');
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
