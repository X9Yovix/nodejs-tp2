const express = require('express');
const router = express.Router();
const path = require('path');

const cars = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
]

router.get('/add', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../view/cars/add.html`));
});

module.exports = router;