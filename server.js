const express = require ('express');
const hbs = require('hbs');
var app = express();
var port = process.env.PORT || 3000;

//Setting view engine for express
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});