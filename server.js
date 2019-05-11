const express = require ('express');
var app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello Anany!</h1>');
});

app.listen(3000, '192.168.1.25');