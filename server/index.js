'use strict';
// you might use a socket https://socket.io/docs/v4/

const 
express = require('express'),
app = express();
var port = 3000
app.get("/", function(req, res){
    res.send("Hello, world!");
});

app.post("/image", function(req, res){
    console.log(`request: ${req}`);
    res.send("We gucci!");
});

app.listen(port, function(){
    console.log(`Express app started on port ${port}`)
});