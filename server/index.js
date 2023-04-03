'use strict';
// you might use a socket https://socket.io/docs/v4/
var cors = require('cors')
const express = require('express'),
multer  = require('multer'),
path = require('path'),
fs = require('fs'),
upload = multer({ dest: 'testImage/' }),
app = express();
/*Random lesson, Type script has a keyword called 'declare' that is used to let a compiler know that the variable/object stated after the 'declare' keyword exists.*/
// Basically i don't need to send the image file. All i need to send is the url to where the image exists on the internet. This would mean that a server or cloud database would have to host it. and
// the server would send it there.
const formData = new FormData();
var response = {
    "top_10_classes": [
        {
            "class_name": "Red-winged Blackbird",
            "class_number": 9,
            "scores": [42, 34, 23, 13,422, ],
            "logit": 754,
            "probability": 0.12,
            // prototypes: {
            //     test_images: ["url"],
            //     protoype_image: ["url"]
            // }
        },
        {
            "class_name": "Snowy Egret",
            "class_number": 11,
            "scores": 88,
            "logit": -33,
            "probability": 0.05
        },
        {
            "class_name": "Bald Eagle",
            "class_number": 2,
            "scores": 77,
            "logit": 221,
            "probability": 0.14
        },
        {
            "class_name": "Common Tern",
            "class_number": 27,
            "scores": 18,
            "logit": 502,
            "probability": 0.06
        },
        {
            "class_name": "Barn Swallow",
            "class_number": 8,
            "scores": 55,
            "logit": 301,
            "probability": 0.08
        },
        {
            "class_name": "Great Egret",
            "class_number": 10,
            "score": 31,
            "logit": 466,
            "probability": 0.03
        },
        {
            "class_name": "Chestnut-sided Warbler",
            "class_number": 38,
            "score": 14,
            "logit": -60,
            "probability": 0.17
        },
        {
            "class_name": "Pigeon Guillemot",
            "class_number": 134,
            "score": 93,
            "logit": 722,
            "probability": 0.10
        },
        {
            "class_name": "Magnolia Warbler",
            "class_number": 37,
            "score": 61,
            "logit": 861,
            "probability": 0.11
        },
        {
            "class_name": "Mourning Dove",
            "class_number": 92,
            "score": 22,
            "logit": 442,
            "probability": 0.14
        }
    ],
    "top_10_prototypes": [
        {
            "coordinates": [
                [4, 6, 1, 5],
                [9, 8, 6, 2],
                [7, 5, 1, 0],
                [0, 6, 9, 5],
                [5, 2, 6, 8],
                [1, 5, 4, 0],
                [10, 2, 4, 3],
                [7, 6, 4, 3],
                [3, 7, 9, 8],
                [2, 1, 7, 10]
            ]
        }
    ],

    "top_10_prototypes": [

        {
        
         "coordinates":  [0, 44, 54, 120],
        
        "prototype_image": "/images...."  
        
        },
        
                {
        
                  "coordinates":  [55, 44, 54, 120],
        
                   "prototype_image": "/images...."  
        
               },
        
        ],

    "path": {
        "url": "picture-link-be/PictureLinkBackend-main/theImages/vgg19/004/50_19push0.0986.pth/",
        "top_prototypes": {
            "folder": "most_activated_prototypes/",
            "name_of_file": "top-X_activated_prototype_in_original_pimg.png"
        },
        "reasoning":{
            "folder": "top-X_class_prototypes",
            "original_image": "most_highly_activated_patch_in_original_img_by_top-X_prototype.png",
            "protorype_image": "top-X_activated_prototype_in_original_pimg.png"
        },
        "resized_original_image":"original_img.png"
    }

    // send total classes/ send number of patches send Total images// 
}

app.use(cors());
var port = 8080
app.get("/", function(req, res){
    res.send("Hello, world!");
});

app.post("/image", upload.single('image'),function(req, res){
    console.log(`request: ${req.file}`);
    //res.json(response);

 const tempPath = req.file.path;
  const targetPath = path.join(__dirname, req.file.originalname);

  if (path.extname(req.file.originalname).toLowerCase() === ".png" ||
      path.extname(req.file.originalname).toLowerCase() === ".jpg" ||
      path.extname(req.file.originalname).toLowerCase() === ".jpeg" ||
      path.extname(req.file.originalname).toLowerCase() === ".gif") {

    fs.rename(tempPath, targetPath, err => {
      if (err) return handleError(err, res);

      res
        .status(200)
        .contentType("text/plain")
        .json(response);
    });
  } else {
    fs.unlink(tempPath, err => {
      if (err) return handleError(err, res);

      res
        .status(403)
        .contentType("text/plain")
        .end("Only .png, .jpg, .jpeg and .gif files are allowed!");
    });
  }
});

app.listen(port, function(){
    console.log(`Express app started on port ${port}`)
});


