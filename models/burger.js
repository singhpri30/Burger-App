// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");


const burger = {
    viewAll: () => {
        return new Promise((resolve, reject) => {
            orm.selectAll("burgers").then((result) => {
                resolve(result);
            }).catch((err) => {
                console.error(err);
            });
        });

    },
    insert: (name) => {
        return new Promise((resolve, reject) => {

            orm.insertOne("burgers", "burger_name", name).then((result) => {
                resolve(result);
            })
        })
    },
    update: (id) => {
        return new Promise((resolve, reject) => {

            orm.updateOne("burgers", "devoured", true, id).then((result) => {
                resolve(result);
            })
        })
    }

};


module.exports = burger;