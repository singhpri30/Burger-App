// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {

    selectAll: (tableInput) => {
        const queryString = "select * from ??";
        connection.query(queryString, [tableInput], (err, res) => {
            if (err) throw err;
            console.log(res);
        })
    },

    insertOne: (tableInput, colName, valOfCol) => {
        const queryString = "insert into ? (?) values (?)";
        connection.query(queryString, [tableInput, colName, valOfCol], (err, res) => {
            if (err) throw err;
            console.log(res);
        })
    },

    updateOne: (tableInput, colName1, valOfCol1, colName2, valOfCol2) => {
        const queryString = "update ? set ?=? where ?=?;"
        connection.query(queryString, [tableInput, colName1, valOfCol1, colName2, valOfCol2], (err, res) => {
            if (err) throw err;
            console.log(res);
        })
    },

};


module.exports = orm;