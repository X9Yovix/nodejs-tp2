const express = require('express');
const router = express.Router();
const path = require('path');

cars = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];

const findElement = (id) => {
    return cars.find(car => car.id == id);
}

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
    var car = findElement(req.params.id);

    if (!car)
        res.status(404).send("not found");

    res.send(car);
});

router.put('/:id', (req, res) => {
    var car = findElement(req.params.id);

    if (!car)
        res.status(404).send("not found");

    car.name = req.body.name;

    res.redirect('/cars/');
});


router.delete('/:id', (req, res) => {
    var car = findElement(req.params.id);

    if (!car)
        res.status(404).send("not found");

    var pos = cars.indexOf(car);
    cars.splice(pos, 1);

    res.redirect('/cars/');
});

module.exports = router;