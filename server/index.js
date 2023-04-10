'use strict';
// you might use a socket https://socket.io/docs/v4/
var cors = require('cors')
const express = require('express'),
multer  = require('multer'),
path = require('path'),
fs = require('fs'),
destination = 'testImage/',
upload = multer({ dest:  destination }),
app = express(),
{ exec } = require("child_process");

/*Random lesson, Type script has a keyword called 'declare' that is used to let a compiler know that the variable/object stated after the 'declare' keyword exists.*/
// Basically i don't need to send the image file. All i need to send is the url to where the image exists on the internet. This would mean that a server or cloud database would have to host it. and
// the server would send it there.



function handleError(err,res){

    console.log(`Error: ${err}`);

    res
    .status(403)
    .contentType("text/plain")
    .end("Only .png, .jpg, .jpeg and .gif files are allowed!");

}

function readJson(path){
    const data = fs.readFileSync(path);
    const jsonData = JSON.parse(data);
    return jsonData;
}
const formData = new FormData();

app.use(cors());

app.use(express.static('images'));

var port = 8080
app.get("/", function(req, res){
    res.send("Hello, world!");
});

app.get("/Red-bellied_Woodpecker-27527.jpg", function(req, res){
  const filename = req.path;
  console.log(filename);
  res.sendFile(`${__dirname}/${filename}`);
});

app.post("/image", upload.single('image'),function(req, res){
    console.log(`request: ${req.file}`);

 const extention = path.extname(req.file.originalname);
 const tempPath = req.file.path,
 file = `testImage${extention}`;

 const PATH2JSON = "../PictureLinkBackend-main/backendJSON.json";
 
 console.log(`file: ${file}`)
 const targetPath = path.join('../theImages', file);
  if (extention.toLowerCase() === ".png" ||
      extention.toLowerCase() === ".jpg" ||
      extention.toLowerCase() === ".jpeg" ||
      extention.toLowerCase() === ".gif") {

    fs.rename(tempPath, targetPath, err => {
      if (err){
        console.log("random")
        return handleError(err, res);
      }
    });

    // Send Base64

    const command = exec(`./backend.sh ${file}`);

    command.on('exit', (code) => {
      console.log(`child process exited with code ${code}`);


     var response = readJson(PATH2JSON);

     console.log(`RESPONSE:  \n  ${JSON.stringify(response)}`);
      res
      .status(200)
      .contentType("text/plain")
      .json(response);
    });

    command.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      command.stderr.on('data', (data) => {
        console.error(`command stderr: ${data}`);
      });

    // var response = readJson(PATH2JSON);

    //  console.log(`RESPONSE:  \n  ${JSON.stringify(response)}`);
    //   res
    //   .status(200)
    //   .contentType("text/plain")
    //   .json(response);

  } else {
    fs.unlink(tempPath, err => {
      if (err){
        console.log("bottom error")
        return handleError(err, res);
      }
    });
  }

});

app.listen(port, function(){
    console.log(`Express app started on port ${port}`)
});


