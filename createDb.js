"use strict";
var User = require('models/user').User;

var user = new User({
    username: "Tolik",
    password: "secret"
});

user.save(function(err, result){
    if(err) throw err;
});
