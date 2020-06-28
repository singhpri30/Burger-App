const mysql = require("mysql");
require("dotenv").config();

let connection;
if (process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        // host: process.env.DB_HOST,
        // port: process.env.DB_PORT,
        // user: process.env.DB_USER,
        // password: process.env.DB_PASSWORD,
        // database: process.env.DB_NAME,
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'admin@123',
        database: 'burgers_db',

    });
};


connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");
});


module.exports = connection;