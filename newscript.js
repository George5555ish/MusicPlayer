//Variables

const lyricsButton = document.getElementById("play-button-3");
const playerContainer = document.getElementById("player-container");
const playBtn = document.getElementById("play-button");
const playBtn2 = document.getElementById("play-button-2");
const prevBtn = document.getElementById("backward-button");
const nextBtn = document.getElementById("forward-button");
const stopBtn = document.getElementById("stop-button");
const volumeLevel =  document.getElementById("volumeLevel");
const volumeControl = document.getElementById("volumeControl");

//Lyrics
const lyricsDisplay = document.getElementById('lyric-text');
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("song-title");
const author = document.getElementById("currentSongAuthor");
const songsPane = document.getElementById("songs-pane");

const spinnerImage = document.getElementById("spinner");
// const mainImage = document.getElementById('cover');
const songLength0 = document.getElementById("song-length0");
const songLength1 = document.getElementById("song-length1");
const songLength2 = document.getElementById("song-length2");
const songLength3 = document.getElementById("song-length3");
const songLength4 = document.getElementById("song-length4");
const songLength5 = document.getElementById("song-length5");
//Song Divs

const songZero = document.getElementById("song-0");
const songOne = document.getElementById("song-1");
const songTwo = document.getElementById("song-2");
const songThree = document.getElementById("song-3");
const songFour = document.getElementById("song-4");
const songFive = document.getElementById("song-5");

//Song Titles
const songs = [
  "Track 1",
  "Track 2",
  "Track 3",
  "Track 4",
  "Track 5",
  "Track 6",
];

const songArray = [
  "Beautiful Eyes",
  "Should've Said No",
  "Teardrops on my Guitar",
  "Bad Blood",
  "I'm only me when I'm with you",
  "I Heart"
];

const authorArray = [
  "Taylor Swift",
  "Taylor Swift",
  "Taylor Swift",
  "Taylor Swift",
  "Taylor Swift",
  "Taylor Swift"
];

const songNum = [songZero, songOne, songTwo, songThree, songFour, songFive];
const songLength = [songLength0, songLength1, songLength2, songLength3, songLength4, songLength5];


// Track SongIndex

let songIndex = 0;
let authorIndex = 0;
let changeIndex = 0;
let songVar = 0;

//change index increments and changes the class based on the index value.
//which in turn changes the box shadow and the svg color together.

//First, Load the song and its details.
loadSong(songs[songIndex], authorArray[authorIndex]);

function loadSong(song, authorPh) {
  title.innerText = song;
  author.innerText = authorPh;
  audio.src = `sounds/${song}.mp3`;
  //   mainImage.src = `${song}.jpg`;
  spinnerImage.src = `${song}.jpg`;

  

}

//Function to Add class

function addedClass(songValue){

  // const tester = songValue - 1;
  // const tester2 = songValue + 1;

  // if (tester < 0){
  //   songValue = songNum.length - 1;
  // }



  // if (tester < 0 || tester > songNum.length - 1){

  //   songNum[songValue].classList.add('added-class');
  // }

  // else{

  //   const hasClass = songNum[tester].classList.contains('added-class');
  //   const hasClass2 = songNum[tester2].classList.contains('added-class');
  //   if (hasClass){
  //     songNum[tester].classList.remove('added-class');
  //   }

  //   if (hasClass2){
  //     songNum[tester2].classList.remove('added-class');
  //   }
  // }

//  console.log("this one" + tester);
  
 

  // songNum[songValue].classList.add('added-class');


  for (var i = 0; i < songNum.length; i++){



  

    var tester = songNum[i];
    // console.log(tester);

    if (i == songValue){
      tester.classList.add('added-class');
    }
    else{
      tester.classList.remove('added-class');
    }
  }



}

function addSongLength(e){
  var duration = audio.duration;
 var currentTime = audio.currentTime;

  var timeInMin = currentTime / 60;
  var timeInSec = currentTime % 60;


    let minutes = Math.floor(currentTime / 60);
      let seconds = Math.floor(currentTime % 60);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      var time =  `${minutes}:${seconds}`;
    
      // console.log(time);
  return time;


}


//Play Song

function playSong(songVar) {
  playerContainer.classList.add("play");
  playBtn.querySelector("span.major").classList.remove("fa-play");
  playBtn.querySelector("span.major").classList.add("fa-pause");

  // playBtn2.querySelector("span.major").classList.remove("fa-play");
  // playBtn2.querySelector("span.major").classList.add("fa-pause");



 addedClass(songVar);

 if (lyricsDisplay.innerText !== ""){
  lyricsDisplay.innerText = "";
}


  audio.play();
}

//Pause Song
function pauseSong() {
  playerContainer.classList.remove("play");
  playBtn.querySelector("span.major").classList.add("fa-play");
  playBtn.querySelector("span.major").classList.remove("fa-pause");

  // playBtn2.querySelector("span.major").classList.add("fa-play");
  // playBtn2.querySelector("span.major").classList.remove("fa-pause");

  audio.pause();
}

//Prev song
function prevSong() {
  songIndex--;
  authorIndex--;
  changeIndex--;
  songVar--;

  if (songIndex < 0 && authorIndex < 0 && songVar< 0) {
    songIndex = songs.length - 1;
    authorIndex = authorArray.length - 1;
    songVar = songNum.length - 1;
  }

 

  // if (changeIndex < 0) {
  //   changeIndex = songs.length - 1;
  // }

  loadSong(songs[songIndex], authorArray[authorIndex]);
  playSong(songVar);

  console.log(playerContainer.classList + songIndex);
}

//Next song
function nextSong() {
  songIndex++;
  authorIndex++;
  changeIndex++;
  songVar++;

  if (songIndex > songs.length - 1 && authorIndex > authorArray.length - 1) {
    songIndex = 0;
    authorIndex = 0;
    songVar = 0;
  }


  //Then load and play next song when button is clicked.
  loadSong(songs[songIndex], authorArray[authorIndex]);
  playSong(songVar);

  //should this part be removed??
  playerContainer.classList.add("change" + changeIndex);
}


//Volume
function changeVolume(amount) {
  audio.volume = amount;
}

//Update progress bar with time.

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  // console.log(duration, currentTime);

  const progressPercent = (currentTime / duration) * 100;

  progress.style.width = progressPercent + "%";


  
}

function setProgress(e) {
  const width = this.clientWidth;

  const clickOffset = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickOffset / width) * duration;

  
}

function stopSong() {


  pauseSong();
  audio.currentTime = 0;



  const isRunning = songNum[songVar].classList.contains("added-class");

  if (isRunning) {
    songNum[songVar].classList.remove("added-class");
  }
}

// function removeOtherClasses(index){

//   }

//Event listeners

playBtn.addEventListener("click", () => {
  const isPlaying = playerContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong(songVar);
  }
});

playBtn2.addEventListener("click", () => {
  const isPlaying = playerContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong(songVar);
  }
});

//You can make this a click handler array...
prevBtn.addEventListener("click", prevSong);

nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);


audio.addEventListener("timeupdate", addSongLength);

progressContainer.addEventListener("click", setProgress);

stopBtn.addEventListener("click", stopSong);

audio.addEventListener("timeupdate", ()=>{

  //SERIOUS FIGHT TO MAKE THE OTHER TIME UPDATES NOT SHOW ON THE HTML
  //MAIII GOSHHH

 for (var i = 0; i < songLength.length; i++){

  

    if (i == songVar){
      songLength[songVar].innerText = addSongLength();
      // console.log(songVar);
      
    }

    else{
      songLength[i].innerText = " ";
      console.log(songLength[i].innerText);
    }
    
}

});


audio.addEventListener("ended", () => {
  this.currentTime = 0;
  nextSong()
});

songsPane.addEventListener("click", ()=>{

  alert("Please Use The Prev and Next Buttons!");
});



lyricsButton.addEventListener('click' ,()=>{
      

      lyricsButton.value = songVar;

    
      

      const artist = "Taylor Swift";
      let track = songArray[songVar];
      const url = "https://api.lyrics.ovh/v1/" +artist+ "/"+ track;

      fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        lyricsDisplay.innerText = data.lyrics;

      });
    


});


volumeLevel.addEventListener("change", (e) => {
  changeVolume(e.currentTarget.value);
});
 
volumeControl.addEventListener('click' ,()=>{

  playerContainer.classList.contains("show")? playerContainer.classList.remove("show"): playerContainer.classList.add("show");

});


// songZero.addEventListener("click", ()=>{

//   const isRunning = songZero.classList.contains('added-class');
//   const isPlaying = playerContainer.classList.contains("play");

//   if (isRunning || isPlaying){
//     songZero.classList.remove('added-class');
//     pauseSong();
//   }
//   else{
//      songZero.classList.add('added-class');
//      playSong();
//   }

// });




