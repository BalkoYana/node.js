const express = require('express');
const mongoose = require('mongoose');
const { port, mongodb_url } = require('./config');
const apartmentsRouter = require('./routes/apartments.route');

mongoose.connect(mongodb_url).then(() => {
    console.log('Mongo DB connected');
})

const app = express();

app.use(express.json());

app.use('/apartments', apartmentsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});