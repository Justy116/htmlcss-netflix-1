// function getMovies(){
//  fetch("hts://api.themoviedb.org/3/movie/popular?api_key=e5a10c321bbd6c822e0ff030e4b57604&quot")
//  .then(res=> res.json())
//  .then((data=>{
//      console.log(data)
//  }))
//  .catch(err=>{
//      console.log("error", err.message)
//  })
// } 
// getMovies()

// // function loop for card
// function loopCard(){
//         console.log("a")
// }

let btnAudio = document.querySelector(".audio");
let btnMute = document.querySelector(".mute");
let video = document.querySelector(".header__video")
btnAudio.addEventListener("click", ()=>{
    video.muted = !video.muted;
    btnAudio.classList.add("mute");
    btnMute.classList.remove("mute");
})
btnMute.addEventListener("click", ()=>{
    btnAudio.classList.remove("mute");
    btnMute.classList.add("mute");
})