for(i=0; i<5; i++){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e5a10c321bbd6c822e0ff030e4b57604&quot&page=${i}`)
    .then(res=> res.json())
    .then((data=>{
        console.log(data)
    }))
    .catch(err=>{
        console.log("error", err.message)
    })
}





// function loop for card
// function loopCard(){
//         console.log("a")
// }

let btnAudio = document.querySelector(".audio");
let btnMute = document.querySelector(".mute");
let video = document.querySelector(".header__video");

//function Audio Movie Background
function audioMovieBackground(){
    btnAudio.addEventListener("click", ()=>{
        video.muted = !video.muted;
        btnAudio.classList.add("mute");
        btnMute.classList.remove("mute");
    })
    btnMute.addEventListener("click", ()=>{
        video.muted = !video.muted;
        btnAudio.classList.remove("mute");
        btnMute.classList.add("mute");
    })
}
audioMovieBackground()
