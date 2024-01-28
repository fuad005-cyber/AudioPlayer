const musicImg = document.querySelector('.music_img')
const musicName = document.querySelector('.name_of_music')
const musicDesc = document.querySelector('.music_desc')
const timeStart = document.querySelector('.timecode_start')
const timeEnd = document.querySelector('.timecode_end')
const prevBtn = document.querySelector('.btn_previous')
const startStopImg = document.querySelector('.start_stop')
const nextBtn = document.querySelector('.next')
const audio = document.querySelector('.my__music')
const progressBar = document.querySelector('.progress__bar')
const progressBorder = document.querySelector('.progress__border')


let num = 0

function play() {
    startStopImg.src = "./img/start.svg";
    audio.play();
}
function pause() {
    startStopImg.src = './img/pause.png';
    audio.pause()
}
document.querySelector('.start_stop-btn').addEventListener('click', () => {
    num++;
    if (num %2 !== 0) {
        play();    
    }
    else {
        pause();
    }
})
let songIndex = 0;
let songs = ['Freetato', 'Guantanamo', 'Mr Lambo-Jackpot']

function changeMusic(song) {
    musicName.innerHTML = song;
    audio.src = `./audio/${song}.mp3`
    musicImg.src = `./img/music${songIndex + 1}.png`;
}

document.querySelector('.next').addEventListener('click', () => {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    changeMusic(songs[songIndex]);
    play();
})
document.querySelector('.btn_previous').addEventListener('click', () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    changeMusic(songs[songIndex]);
    play();
})  
// ?????????????????????????????????????????????????
function timeUpdate(){
    let duration = audio.duration;
    let currentTime = audio.currentTime;
    console.log(duration); 
    console.log(currentTime);
}
audio.addEventListener("timeUpdate", timeUpdate());

