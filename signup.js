const db = require('./db');
const bcrypt = require('bcrypt');

// Hash and store passwords
function signup(username, password) {
  const hashedPassword = bcrypt.hashSync(password, 10); // 10 is the salt rounds

  db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
    if (err) {
      console.error('Error during signup:', err.message);
    } else {
      console.log('User registered successfully!');
    }
  });
}

// Example usage
signup('user1', 'password123');