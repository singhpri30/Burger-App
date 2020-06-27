// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");


const burger = {
    viewAll: () => {
        orm.selectAll("burgers").then((result) => {
            console.log(result);
        })
            .catch((err) => {
                console.error(err);
            });
    },
    insert: (burgerName) => {
        orm.insertOne("burgers", "burger_name", burgerName).then((result) => {
            console.log(result);
        })
            .catch((err) => {
                console.error(err);
            });
    },
    // update: () => {
    //     orm.updateOne("burgers", "burger_name",).then((result) => {
    //         console.log(result);
    //     })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // }

};


module.exports = burger;