// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {

    selectAll: (tableInput) => {
        return new Promise((resolve, reject) => {

            const queryString = "select * from ??";
            connection.query(queryString, [tableInput], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    },

    insertOne: (tableInput, colName, valOfCol) => {
        return new Promise((resolve, reject) => {

            const queryString = "insert into ? (?) values (?)";
            connection.query(queryString, [tableInput, colName, valOfCol], (err, result) => {
                if (err) {
                    reject(err);
                };
                resolve(result);
            })
        })
    },

    updateOne: (tableInput, colName, valOfCol1, valOfCol2) => {
        return new Promise((resolve, reject) => {

            const queryString = "update ?? set ??=? where id=?;"
            connection.query(queryString, [tableInput, colName, valOfCol1, valOfCol2], (err, result) => {
                if (err) {
                    reject(err);
                };
                resolve(result);
            })
        })
    },

};


module.exports = orm;