const Sequelize = require('sequelize');
//const mysql = require('mysql2');

var config = {
  host: 'localhost',
  database: 'airjld',
  user: 'root',
  password: 'password'
};

//Create connection to MySQL database
var connection = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// CODE FOR VANILLA MYSQL SETUP
// mysql.createConnection()

// connection.connect((err) => {
//   if (err) {
//     // console.log(err)
//     connection.query(`CREATE DATABASE IF NOT EXISTS ${connection.database}`, function (err, result) {
//       if (err) {
//         throw err;
//       } else {
//         console.log("Database created");
//       }
//     })
//   } else {
//     console.log("Connected to DATABASE!");
//   }
// });
//
module.exports = connection;