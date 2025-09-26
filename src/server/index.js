const express = require('express');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

const dbPath = path.join(__dirname, 'user.db');
let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    await db.run(`
      CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT,
        last_name TEXT,
        email TEXT,
        department TEXT
      );
    `);

    app.listen(4000, () => {
      console.log("Server Running at http://localhost:4000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();


//  Get all users
app.get('/user/', async (request, response) => {
  const query = `SELECT * FROM user;`;
  const users = await db.all(query);
  console.log(users);
  response.send(users);
});


// Add new user
app.post('/user/', async (request, response) => {
  const { first_name, last_name, email, department } = request.body;
  const query = `
    INSERT INTO user (first_name, last_name, email, department)
    VALUES ('${first_name}', '${last_name}', '${email}', '${department}');
  `;
  const dbResp =await db.run(query);
  console.log(dbResp);
  response.send(`User Successfully Added with ${dbResp.lastID}`);

});


// Update user
app.put('/user/:id/', async (request, response) => {
  const { id } = request.params;
  const { first_name, last_name, email, department } = request.body;

  const query = `
    UPDATE user
    SET
      first_name = '${first_name}',
      last_name = '${last_name}',
      email = '${email}',
      department = '${department}'
    WHERE id = ${id};
  `;

  await db.run(query);
  console.log(query);
  response.send('User Details Updated');
});


// Delete user
app.delete('/user/:id/', async (request, response) => {
  const { id } = request.params;
  const query = `DELETE FROM user WHERE id = ${id};`;
  await db.run(query);
  console.log(query);
  response.send('User Removed');
});

module.exports = app;