"use strict";

var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('libs/log')(module);

var app = express();
app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

//// Middleware
//app.use(express.favicon());
//app.use(express.bodyParser());
//app.use(express.cookieParser());
app.use(app.router);

app.get('/', function(req, res, next){
    res.render('index', {title: 'Great!'});
});

//app.use(function(req, res, next){
//    if('/' === req.url){
//        res.render('Hello');
//    } else {
//        throw 'error bla';
//    }
//});

app.use(function(err, req, res, next){
    res.send(err);
});

http.createServer(app).listen(config.get('port'), function(){
    log.info('Express started');
});
