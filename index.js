'use strict';

require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/marina', function(request, response) {
    response.send('Hello, Marina');
});

app.listen(process.env.PORT);