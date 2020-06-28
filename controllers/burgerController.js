const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");


//route to display all the records
router.get("/", (req, res) => {

    burger.viewAll().then((data) => {
        let devoured = data.filter((burger) => burger.devoured == true);
        let notDevoured = data.filter((burger) => burger.devoured == false);
        const handlebarObject = {
            devoured: devoured,
            notDevoured: notDevoured,
        };
        //console.log(res)
        console.log(handlebarObject);
        res.render("index", handlebarObject);
    });
});

//route to add a new burger
router.post("/api/burgers", (req, res) => {
    console.log(req.body.name)
    burger.insert(req.body.name).then((data) => {
        console.log("burger added successfully");
        res.json(req.body.name);
    });
});

// update to change the devoured to true
router.put("/api/burgers/:id", (req, res) => {
    const id = req.params.id;
    burger.update(id).then(() => {
        console.log("Burger successfully devoured");
        res.json(id);
    });
});


module.exports = router;