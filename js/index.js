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

let btn = document.querySelector(".header__mute");
let video = document.querySelector(".header__video")
btn.addEventListener("click", ()=>{
    video.muted = !video.muted;
})