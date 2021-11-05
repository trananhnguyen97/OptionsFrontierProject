// Test script
// TODO: remove
const mysql = require('mysql');

require('dotenv').config();

const database = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_LOCAL_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = database;
