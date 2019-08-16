const express = require ('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;

//Regestering partials
hbs.registerPartials(__dirname + '/views/partials');

//Setting view engine for express
app.set('view engine', 'hbs');

//middleware
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    // var log = now +':'+req.method +' '+ req.url;

    console.log(log);
    fs.appendFile('server.log', log +'\n', (err) => {
        if(err){
            console.log('Unable to append to server.log');
        }
    });
    next();
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Hello! Welcome.'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});