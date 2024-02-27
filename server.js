const express = require('express');
const { port } = require('./config');
const apartmentsRouter = require('./routes/apartments.route');

const app = express();

app.use(express.json());

app.use('/apartments', apartmentsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});