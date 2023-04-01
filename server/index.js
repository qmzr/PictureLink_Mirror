'use strict';
// you might use a socket https://socket.io/docs/v4/
var cors = require('cors')
const express = require('express'),
app = express();
/*Random lesson, Type script has a keyword called 'declare' that is used to let a compiler know that the variable/object stated after the 'declare' keyword exists.*/
var response = {
    "top_10_classes": [
        {"class_name": "Belted Kingfisher", "class_number": 11, "score": 73, "logit": 468},
        {"class_name": "Common Raven", "class_number": 84, "score": 41, "logit": -67},
        {"class_name": "Northern Flicker", "class_number": 41, "score": 12, "logit": 354},
        {"class_name": "Barn Swallow", "class_number": 136, "score": 88, "logit": 555},
        {"class_name": "Mallard", "class_number": 97, "score": 69, "logit": 254},
        {"class_name": "Red-winged Blackbird", "class_number": 130, "score": 29, "logit": -87},
        {"class_name": "Yellow Warbler", "class_number": 161, "score": 95, "logit": 243},
        {"class_name": "Common Yellowthroat", "class_number": 157, "score": 84, "logit": 679},
        {"class_name": "American Goldfinch", "class_number": 124, "score": 53, "logit": 873},
        {"class_name": "Downy Woodpecker", "class_number": 37, "score": 17, "logit": 182}
    ],
    "top_10_prototypes": [
        {
            "coordinates": [
                [5, 7, 8, 1],
                [0, 9, 4, 8],
                [1, 9, 3, 7],
                [6, 3, 2, 5],
                [8, 6, 7, 0],
                [10, 5, 1, 5],
                [5, 4, 4, 8],
                [3, 2, 1, 2],
                [0, 10, 5, 7],
                [9, 9, 7, 1]
            ]
        }
    ]
}
app.use(cors());
var port = 8080
app.get("/", function(req, res){
    res.send("Hello, world!");
});

app.post("/image", function(req, res){
    console.log(`request: ${req}`);
    res.json(response);
});

app.listen(port, function(){
    console.log(`Express app started on port ${port}`)
});