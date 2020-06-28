// require MySQL connection.
const connection = require("./connection");

// Object for all our SQL statement functions.
const orm = {
    //display all the records from database burgers_db
    selectAll: (tableInput) => {
        return new Promise((resolve, reject) => {

            const queryString = "select * from ??";
            connection.query(queryString, [tableInput], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
                console.log("hello" + result);
            });

        });
    },
    //insert a record into the burgers_db
    insertOne: (tableInput, colName, valOfCol) => {
        return new Promise((resolve, reject) => {

            const queryString = "insert into ?? (??) values (?)";
            connection.query(queryString, [tableInput, colName, valOfCol], (err, result) => {
                if (err) {
                    reject(err);
                };
                console.log(result);
                resolve(result);
            });

        });
    },
    //update the existing record
    updateOne: (tableInput, colName, valOfCol1, valOfCol2) => {
        return new Promise((resolve, reject) => {

            const queryString = "update ?? set ??=? where id=?;"
            connection.query(queryString, [tableInput, colName, valOfCol1, valOfCol2], (err, result) => {
                if (err) {
                    reject(err);
                };
                resolve(result);
            });
        });
    },

};


module.exports = orm;