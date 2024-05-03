console.log("Welcome to Spotify");

// Initialize the Variables
let songIdx = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar")

let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3",coverPath: "covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3",coverPath: "covers/3.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3",coverPath: "covers/4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3",coverPath: "covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3",coverPath: "covers/6.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3",coverPath: "covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3",coverPath: "covers/8.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3",coverPath: "covers/9.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3",coverPath: "covers/10.jpg"},
]

// Handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
    }
})
// Listen to events
myProgressBar.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    // Update Seekbar
})