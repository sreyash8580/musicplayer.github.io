 // const music = document.querySelector("audio");

    const music = document.querySelector("audio");
    const img = document.querySelector("img");
    const play = document.getElementById("play");

    const artist = document.getElementById("artist");
    const title = document.getElementById("title");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    let progress= document.getElementById("progress");
    let total_duration = document.getElementById("duration"); 
    let current_time = document.getElementById("current_time");
    let progress_div = document.getElementById("progress_div");


    // Array of objects to declare songs 
    const songs = [
        {
        name:"1",
        title:"Kya mujhe pyar hai",
        artist:"KK",
        },

        {
        name:"2",
        title:" Dilbara ",
        artist:"B.Praak",
        },

        {
        name:"3",
        title:"Hum Tum",
        artist:"Sukriti Kakar, Prakriti Kakar",
        },
    ];

    
    let isPlaying = false;
// PLAY 
    // play.addEventListener("click", () => {
        const playMusic = () => {
        isPlaying = true;
        music.play();
        play.classList.replace("fa-play", "fa-pause") //To replace play-pause button on click
        img.classList.add("anime");
    // });
    };

// PAUSE 
    // play.addEventListener("click", () => {
        const pauseMusic = () => {
        isPlaying = false;
        music.pause();
        play.classList.replace("fa-pause", "fa-play")
        img.classList.remove("anime");
    // });
    };
    
    play.addEventListener("click", () => {
        if(isPlaying)
        {
            pauseMusic();
        }
        else{
            playMusic();
        }

        // TERNANRY OPERATOR isPlaying ? pauseMusic() : playMusic();
    });

    // Changing Music 
    const loadSong = (songs) => { 
        title.textContent=songs.title;
        artist.textContent=songs.artist;
        music.src = "audio/" + songs.name + ".mp3"; 
        img.src = "images/" + songs.name + ".png";
    };

    songsIndex = 0;
    //  loadSong(songs[1]);

    //  next song
    const nextSong = () => {
        // songsIndex++;
        songsIndex = (songsIndex + 1) % songs.length; // Songs khatam hone ke baad first me automatic jane k liye
        loadSong(songs[songsIndex]);
        playMusic();
    };

    // previous song
    const prevSong = () => {
        // songsIndex++;
        songsIndex = (songsIndex - 1 + songs.length) % songs.length;
        loadSong(songs[songsIndex]);
        playMusic();
    };

    // PROGRESS DURATION 
    music.addEventListener('timeupdate',(event) => {
     // console.log(event);
     const { currentTime, duration} = event.srcElement;
     // console.log(currentTime);
     // console.log(duration);

     let progress_time = (currentTime / duration) * 100;
        progress.style.width = `${progress_time}%`;
        // % sign to seek that black line with duration

        // Update music duration dynamically
        let minute_duration = Math.floor(duration/60);
        let second_duration = Math.floor(duration%60);
        // console.log(minute_duration);
        // console.log(second_duration);

        let tot_duration = `${minute_duration}:${second_duration}`;
        // to avoid NAN text while changing song use if condition
        if(duration){
            total_duration.textContent= `${tot_duration}`;
        }
        // total_duration.textContent = `${tot_duration}`;
    

        // Currrent music duration dynamically
        let minute_currentTime = Math.floor(currentTime/60);
        let second_currentTime = Math.floor(currentTime%60);

        if(second_currentTime < 10){
            second_currentTime = `0${second_currentTime}`;
        }
        let tot_currentTime = `${minute_currentTime}:${second_currentTime}`;
        current_time.textContent = `${tot_currentTime}`;
    });

    // PROGRESS BAR CLICK 
    progress_div.addEventListener("click", (event) => {
        console.log(event); 
        const {duration} = music;

        let  move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
        // console.log(move_progress); 
         
        music.currentTime = move_progress;
    });

    // NEXT SONG IF SONG ENDS 
    music.addEventListener("ended", nextSong);

    //  next button
    next.addEventListener("click", nextSong);
    
    // previous button
    prev.addEventListener("click", prevSong);
 
