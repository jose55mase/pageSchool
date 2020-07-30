// server.js
'use strict';

var express = require('express');
var path = require('path');
var app = express();
//const dir = `${__dirname}/public/`;
//const page = `${__dirname}/public/page/analisis_de_entorno/`;


app.set('view engine','ejs')
/*
app.get('/', function (req, res) {
    res.sendFile(dir+'home.html');
});
app.get('/home', function (req, res) {
    res.sendFile(dir+'home.html');
});
*/


app.get( '/entornoPoliticoLegal', async  function (req, res) {
    //res.sendFile(page+'entornoCultural.html');
    res.render('entornoPoliticoLegal')
});
app.get( '/', async  function (req, res) {
    //res.sendFile(page+'entornoCultural.html');
    res.render('home')
});

app.get( '/entornoCultural', async  function (req, res) {
    //res.sendFile(page+'entornoCultural.html');
    res.render('entornoCultural')
});

app.use(express.static("public"))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


