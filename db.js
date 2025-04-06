const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const selectedUserData = require('./data'); // import the user data

const app = express();
const db = new sqlite3.Database(':memory:');
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));

// create a table w two columns for income and housing data
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, income JSON, housing JSON)');

app.get('/add-user', (req, res) => {
  const username = 'john_doe'; // change this when we get user auth running
  const incomeData = JSON.stringify(selectedUserData.income); // convert income data to string
  const rentData = JSON.stringify(selectedUserData.rent); // convert housing data to string

  db.run('INSERT INTO users (username, income, housing) VALUES (?, ?, ?)', [username, incomeData, rentData], (err) => {
    if (err) {
      return res.status(500).send('Error inserting user');
    }
    res.send('User added successfully');
  });
});

// Route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Welcome to the database prototype');  // Simple response when visiting "/"
});

// Example route for "/income"
app.get('/income', (req, res) => {
  res.json(selectedUserData.income);  // Send the income data as JSON
});

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});

















