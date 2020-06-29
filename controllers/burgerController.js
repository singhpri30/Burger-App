const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");


//route to display all the records
router.get("/", (req, res) => {

    burger.viewAll().then((data) => {
        let devoured = data.filter((burger) => burger.devoured == true);
        let notDevoured = data.filter((burger) => burger.devoured == false);
        const burger_data = {
            devoured: devoured,
            notDevoured: notDevoured,
        };
        res.render("index", burger_data);
    });
});

//route to add a new burger
router.post("/", (req, res) => {
    burger.insert(req.body.name).then((data) => {
        console.log("burger added successfully");
        res.json(req.body.name);
    });
});

// update to change the devoured to true
router.put("/:id", (req, res) => {
    const id = req.params.id;
    burger.update(id).then(() => {
        console.log("Burger devoured");
        res.json(id);
    });
});


module.exports = router;