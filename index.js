// server.js
'use strict';

var express = require('express');
var path = require('path');
var app = express();
//const dir = `${__dirname}/public/`;
//const page = `${__dirname}/public/page/analisis_de_entorno/`;


app.set('view engine','ejs')
app.set('port', (process.env.PORT || 8080))
/*
app.get('/', function (req, res) {
    res.sendFile(dir+'home.html');
});
app.get('/home', function (req, res) {
    res.sendFile(dir+'home.html');
});
*/

app.get( '/cafeOrganico', async  function (req, res) {
    //res.sendFile(page+'entornoCultural.html');
    res.render('cafeOrganico')
});

app.get( '/entornoinversionExtranjera', async  function (req, res) {
    //res.sendFile(page+'entornoCultural.html');
    res.render('entornoinversionExtranjera')
});


app.get( '/entornoComercioInternacional', async  function (req, res) {
    //res.sendFile(page+'entornoCultural.html');
    res.render('entornoComercioInternacional')
});

app.get( '/entornoTecnologicoGeoAmbiental', async  function (req, res) {
    //res.sendFile(page+'entornoCultural.html');
    res.render('entornoTecnologicoGeoAmbiental')
});

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

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 8080!');
});


