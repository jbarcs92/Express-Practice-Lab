const express = require('express');
const path = require('path');
const app = express();
const athleteDb = require('./data/athletes-db');

app.get('/', function(req, res) {
    res.redirect('/home');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/athletes', function(req, res) {
    res.render('athletes/index', {
        athletes: athleteDb.getAll()
    });
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));