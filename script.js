console.log("Welcome to Spotify");
//intialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay  = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
   {songName: "Butter", filePath:"songs/1.mp3",coverPath:'covers/1.png'},
   {songName: "Boy With Luv", filePath:"songs/2.mp3",coverPath:'covers/2.jpeg'},
   {songName: "Dynamite", filePath:"songs/3.mp3",coverPath:'covers/3.jpeg'},
   {songName: "Idol", filePath:"songs/4.mp3",coverPath:'covers/4.png'},
   {songName: "Life Goes On", filePath:"songs/5.mp3",coverPath:'covers/5.jpeg'},
   {songName: "Mic Drop", filePath:"songs/6.mp3",coverPath:'covers/6.jpeg'},
]

// audioElement.play();
//handle play and pause click
masterPlay.addEventListener


//listen to events
document.addEventListener('timeupdate')