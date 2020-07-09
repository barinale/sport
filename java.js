/**scoilling event*/

const header = document.querySelector(".header");
const headers = document.querySelector("header");
const nav = document.querySelector("header .header .nav nav");
window.addEventListener('scroll', () =>{
if(headers.getBoundingClientRect().bottom<headers.offsetHeight/1.2){
  header.classList.add("headerfixed");
  console.log(window.pageYOffset)
  if(window.innerWidth<780)
    nav.style.background="var(--secound-color)"
}else{
  header.classList.remove("headerfixed");
  // header.style.postion="relative";
  nav.style.background=""

}


})
