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


router.get('/:id', (req, res) => {
    var id = req.params.id;
    var car = cars.find(car => car.id == id);

    if (!car)
        res.status(404).send("not found");

    res.send(car);
});

module.exports = router;