const express = require('express');
const carsRouter = require('./routes/cars');

const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/cars', carsRouter);