const express = require('express');
const router = express.Router();
const path = require('path');

cars = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];

router.get('/add', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../view/cars/add.html`));
});

router.post('/add', (req, res) => {
    var id = cars.length + 1;
    var name = req.body.name;

    var newElement = { id: id, name: name };

    cars.push(newElement);

    res.redirect('/cars/');
});

router.get('/', (req, res) => {
    res.send({ "cars": cars });
});

module.exports = router;