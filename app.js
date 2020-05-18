const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");





const port = process.env.PORT || 425;




app.use(express.static(__dirname));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});




app.post("/", function (req, res) {
  var songVar = req.body.songVar;

  

console.log(songVar);
// const artist = "Taylor Swift";
// let track = songArray[songVar];
// ``
// const url = "https://api.lyrics.ovh/v1/" +artist+ "/"+ track;

  // https.get(url, function(response){

  //   response.on('data', function(data){
  //       var lyrics = JSON.parse(data);

  //       var finalLyrics = lyrics.lyrics;

  //       songVar = finalLyrics;

      // console.log(songVar);


      // var answer = finalLyrics;
      // var answer2 = "Hello";

      // module.exports = {answer, answer2};
     
      // console.log(module.exports);

    });
         
//   });

  

  
// });

app.listen(port, () => {
  console.log("Server running at port " + port);
});

