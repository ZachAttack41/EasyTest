const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

// Connect to SQLite database (creates a new database if it doesn't exist)
const db = new sqlite3.Database('your_database.db');

// Create a table to store user information
db.run(`
  CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL
  )
`);

// Export the database connection
module.exports = db;