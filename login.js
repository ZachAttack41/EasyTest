const db = require('./db');
const bcrypt = require('bcrypt');

// Verify passwords during login
function login(username, password) {
  db.get('SELECT password FROM users WHERE username = ?', [username], (err, row) => {
    if (err) {
      console.error('Error during login:', err.message);
    } else if (row) {
      const storedPassword = row.password;

      if (bcrypt.compareSync(password, storedPassword)) {
        console.log('Login successful!');
      } else {
        console.log('Incorrect password!');
      }
    } else {
      console.log('User not found!');
    }
  });
}

// Example usage
login('user1', 'password123');