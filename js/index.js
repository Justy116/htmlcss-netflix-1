let containerCard = document.querySelector(".container-card")
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

// for(i=0; i<5; i++){
    // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e5a10c321bbd6c822e0ff030e4b57604&quot&page=1`)
    // .then(res=> res.json())
    // .then((data=>{
    //     let results = data.results
    //     results.map(element =>{
    //         containerCard.innerHTML +=
    //     `
    //     <div class="card">
    //           <img class="card__img" src="https://image.tmdb.org/t/p/original${element.backdrop_path}" alt="Movie poster 1" />
    //           <!-- Card Modal -->
    //           <div class="card__modal">
    //             <img class="card__img" src="https://image.tmdb.org/t/p/original${element.backdrop_path}" alt="Movie poster 1" />
    //             <div class="card__bottom">
    //               <div class="card__controls">
    //                 <!-- Play btn -->
    //                 <span class="control">
    //                   <img class="svg-50" src="./assets/img/play-solid.svg" alt="play icon" />
    //                 </span>
    //                 <!-- Plus btn -->
    //                 <span class="control control--light">
    //                   <img class="svg-50" src="./assets/img/plus-solid.svg" alt="plus icon" />
    //                 </span>
    //                 <!-- Like btn -->
    //                 <span class="control control--light">
    //                   <img class="svg-50" src="./assets/img/thumbs-up-regular.svg" alt="like icon" />
    //                 </span>
    //                 <!-- Arrow down btn -->
    //                 <span class="control control--light">
    //                   <img class="svg-50" src="./assets/img/chevron-down-solid.svg" alt="arrow down icon" />
    //                 </span>
    //               </div>
    //               <div class="card__text">
    //                 <span class="text-green text-bold">98% compatibile</span>
    //                 <span class="maturity">VM 18</span> 1 stagione <span class="quality">HD</span>
    //               </div>
    //               <div class="card__genres"><span>Anticonformismo</span><span>Crudo</span><span>Dramma</span></div>
    //             </div>
    //           </div>
    //         </div>`

    //     })
    // }))
    // .catch(err=>{
    //     console.log("error", err.message)
    // })
// }





// function loop for card
// function loopCard(){
//         console.log("a")
// }




