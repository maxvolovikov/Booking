const Sequelize = require('sequelize');

const config = {
  host: process.env.RDS_HOSTNAME || 'localhost',
  database: process.env.RDS_DB_NAME || 'airjld',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || 'password',
  port: process.env.RDS_PORT,
};

module.exports = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// CODE FOR VANILLA MYSQL SETUP
// const mysql = require('mysql2');
// mysql.createConnection()

// connection.connect((err) => {
//   if (err) {
//     // console.log(err)
//     connection.query(`CREATE DATABASE IF NOT EXISTS ${connection.database}`, (err, result) => {
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
