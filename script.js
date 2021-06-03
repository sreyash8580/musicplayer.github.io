// const music = document.querySelector("audio");

    const music = document.querySelector("audio");
    const img = document.querySelector("img");
    const play = document.getElementById("play");

    const artist = document.getElementById("artist");
    const title = document.getElementById("title");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");


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

    //  next button
    next.addEventListener("click", nextSong);
    
    // previous button
    prev.addEventListener("click", prevSong);
 