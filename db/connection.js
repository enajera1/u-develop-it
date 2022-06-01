const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your SQL username,
    user: 'root',
    //Your SQL password
    password: 'ENZOboltonNajera1223.',
    database: 'election'
  },
  console.log(`Connected to the election database.`)
);


module.exports = db;