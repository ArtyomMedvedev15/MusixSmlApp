var songs = ["BillieEilish-BadGuy.mp3","BillieEilish-Copycat.mp3","BillieEilish-BuryAFriend.mp3"];
var postersSong = ["poster.jpg","Programmer.jpg","poster.jpg"];
var currentSong = 0;

var songName = document.getElementById("songTitle");
var fill = document.getElementById("fill");

var song = new Audio();

window.onload = playSong;

function playSong(){
    song.src = "./musix/"+songs[currentSong];
    $("#imgPoster").attr("src","./img/"+postersSong[currentSong]);

    songName.textContent = songs[currentSong];

    song.play();
 }

 function PlayOrPause(){
     if(song.paused){
         song.play();
         $("#BtPlay i").attr("class","fas fa-play");
     }else{
         song.pause();
         $("#BtPlay i").attr("class","fas fa-pause");

     }
 }

 function nextSong(){
     currentSong++;
     if(currentSong > songs.length-1){
         currentSong = 0;
     }
     playSong();
     $("#imgPoster").attr("src","./img/"+postersSong[currentSong]);
 }

 function prev(){
     currentSong--;
     if(currentSong<0){
         currentSong = songs.length-1;
     }
     $("#imgPoster").attr("src","./img/"+postersSong[currentSong]);
     playSong();
 }

 song.addEventListener('timeupdate',function(){

    var pos = song.currentTime/song.duration;

    fill.style.width = pos * 100 + '%';
  });
 