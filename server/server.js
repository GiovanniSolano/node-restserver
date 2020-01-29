const express = require('express')

const app = express();

const mongoose = require('mongoose');


require('../config/config');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(require('./routes/index'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});



app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', 3000);
})