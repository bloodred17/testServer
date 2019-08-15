const express = require ('express');
var app = express();
app.get('/', (req, res) => {
    res.send('Hello Node!');
});

app.get('/on', (req, res) => {
    res.send('1');
});

app.listen(3000, 'localhost');