let arrey = [
    { songName: "Arjan Vailly", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" },
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle bhi Main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Popular by weekend", url: "./songs/Popular (with Playboi Carti & Madonna) - The Idol Vol. 1 (Music from the HBO Original Series).mp3", img: "./images/Popular.png" },
]

let allSongs =  document.querySelector('#all-songs');

let poster = document.querySelector('#left');

let play = document.querySelector('#play');
let backward = document.querySelector('#backward');
let forward = document.querySelector('#forward');

let selectedSong = 0;

let audio = new Audio();

function mainFunction(){
    let clutter = '';

    arrey.forEach(function(elem,index){
        clutter += ` <div class="song-card" id=${index} >
            <div class="part1">
                <img src=${elem.img} alt="">
                <h2>${elem.songName}</h2>
            </div>
            <h6>3:56</h6>
        </div>`;
    })
    
    allSongs.innerHTML = clutter;

    audio.src = arrey[selectedSong].url;

    poster.style.backgroundImage = `url(${arrey[selectedSong].img})`;
}
mainFunction();

function selectingSong(){
    allSongs.addEventListener('click',function(dets){
    selectedSong = dets.target.id
    mainFunction();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    audio.play();
});
}
selectingSong();

function playEvent(){
    let flag = 0;
play.addEventListener('click', function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        mainFunction();
        audio.play();
        flag = 1;

    }else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
        mainFunction();
        audio.pause();
        flag = 0;
    }

})
}
playEvent();


function forwardEvent(){
    forward.addEventListener('click', function(){
        if (selectedSong < arrey.length - 1) {
            selectedSong++
            mainFunction();
            audio.play();

            
        }else{
            forward.style.opacity = 0.4;


        }
    })
}
forwardEvent();

function backwardEvent(){
    backward.addEventListener('click', function(){
        if (selectedSong > 0) {
            selectedSong--
            mainFunction();
            audio.play();
        }else{
            backward.style.opacity = 0.4;
        }
    })
}
backwardEvent();