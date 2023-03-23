'use strict';

const 
express = require('express'),
app = express();
var port = 3000
app.get("/", function(req, res){
    res.send("Hello, world!");
});

app.get("/okay", function(req, res){
    res.send("We gucci!");
});

app.listen(port, function(){
    console.log(`Express app started on port ${port}`)
});