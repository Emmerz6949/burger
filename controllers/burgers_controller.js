const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const ohm = {
            burgers: data
        };
        res.render("index", ohm);
    });
});

router.post("/api/burgers", function(req,res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req,res) {
    burger.updateOne(req.body.devoured, req.params.id, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Exports routes for server.js to use.
module.exports = router;
