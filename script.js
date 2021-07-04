/* @import url('https://fonts.googleapis.com/css2?family=Jost:wght@100&display=swap'); */

/* font-family: 'Jost', sans-serif; */

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html{
    font-size: 62.5%;
    font-family: 'Jost', sans-serif;
}

.main_div{
    width: 100vw;
    height: 100vh;
    /* background-color: #f6f6f6; */
    background-image: url(images/bg/bg1.png);
    /* opacity: 0.5; */
    /* div ke andar div ko center krne k liye niche wala use kro  */
    display: grid;
    place-items: center;
}

/* 1 rem = 10 px  */

.music_container{
    width: 35rem;
    height: 55rem;
    background-color: #a47e7e;
    /* background-image: linear-gradient(0 0 0 rgba 0.4); */
    border-radius: 2rem;
    box-shadow: 0 1.2rem 3rem 0.5rem rgba(0, 0, 0, 0.2);
    padding: 3rem;
    text-align: center;
}

.music_container #title{
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    word-spacing: 0.5rem;
    color: #171717;
    margin: 2rem 0 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 500;
    text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
}

.music_container #artist{
    /* color: #cccaca; */
    color: #504141;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    font-size: 2rem;
    margin-bottom: 4rem;
    font-weight: 300;
}

.img_container{
    width: 25rem;
    height: 25rem;
    margin: auto;
}

.img_container img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover; /* parent div k andar fit krne k liye*/
    box-shadow: 0 1.2rem 3rem 0.5rem rgba(0, 0, 0, 0.4);
}

.music_controls{
    width: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-top: 1rem;
}

.music_controls .fas{
    color: #111111;
    font-size: 2rem;
    cursor: pointer;
    filter: drop-shadow(0 1.2rem 3rem rgba(0, 0, 0, 0.4));
}


.music_controls .main_button{
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    /* background-color: rgb(224, 208, 208); */
    background-color: #111;
    color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
}


/* fontawesome hover  */

.music_controls .fas:hover{
    color: grey;
}

/* play button hover  */

.music_controls .fa-play:hover{
    background-color: #f6f6f6;
    color: #111;
    box-shadow: 0 1rem 2rem 0.2rem rgba(0, 0, 0, 0.4);
}

/* add animation class to animate */

.anime{
     animation: rotatePlayer 3s linear infinite;
}

@keyframes rotatePlayer{
    from{ 
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}

/* PROGRESS STYLE  */
.progressbar_container{
    width: 100%;
    height: auto;
    padding: 1rem 0;
    margin-top: 1rem;
}

.progress_div{
    width: 100%;
    height: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    border-radius: 4rem;
    position: relative;
    margin-top: 0.5rem;
    transition: all 1s linear;
    -moz-transition: all 1s linear;
    -o-transition: all 1s linear;
    -webkit-transition: all 1s linear;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
}

/* BLACk LINE IN PROGRESS BAR  */
.progress{
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: black; 
    border-radius: 4rem;
    /* transition: width 1s linear;
    -moz-transition: width 1s linear;
    -o-transition: width 1s linear;
    -webkit-transition: width 1s linear; */
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
}

.progress_duration{
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
}
