const express = require ('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello Node!');
});

app.get('/on', (req, res) => {
    res.send('1');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});