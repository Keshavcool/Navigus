const mysql = require('mysql');
require('dotenv').config();

const {DB,DB_HOST,DB_USERNAME,DB_PASSWORD} = process.env;

const conn = mysql.createConnection({
    host : DB_HOST,
    user : DB_USERNAME,
    password : DB_PASSWORD,
    database : DB
});

conn.connect((err) => {
    if(err) throw err;
    console.log(`Connected to the database ${DB}`);
});

module.exports = conn;