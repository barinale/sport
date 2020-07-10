/**scoilling event*/

const header = document.querySelector(".header");
const headers = document.querySelector("header");
const nav = document.querySelector("header .header .nav nav");
/**awesometheme*/
const awesome = document.querySelector("#awesometheme article");
awesome.style.opacity="0";
awesome.style.transform ="translateY("+50+"%)";
awesome.style.transition ="0.6s all";
/**upcpmingEvents*/
const upcomung = document.querySelector("#upcomingEvenets");
const upcomungitem = document.querySelector("#upcomingEvenets article .items");

upcomungitem.style.opacity="0";
upcomungitem.style.transform ="translateY("+50+"%)";
upcomungitem.style.transition ="0.6s all";
window.addEventListener('scroll', () =>{

if(headers.getBoundingClientRect().bottom<headers.offsetHeight/1.2){
  header.classList.add("headerfixed");
  if(window.innerWidth<780)
    nav.style.background="var(--secound-color)"
}else{
  header.classList.remove("headerfixed");
  // header.style.postion="relative";
  nav.style.background=""
}
if(awesome.getBoundingClientRect().top<headers.offsetHeight){
  awesome.style.opacity="1";
  awesome.style.transform ="translateY("+0+"%)";
}
console.log(upcomung.getBoundingClientRect().top)
console.log(headers.offsetHeight)
if(upcomung.getBoundingClientRect().top<headers.offsetHeight/1.2){
  upcomungitem.style.opacity="1";
  upcomungitem.style.transform ="translateY("+0+"%)";

}


}

)

/*photolisder*/
/*lastest News*/
const latestnews = document.querySelector("#latestbews")
latestnews.addEventListener("click",sliderF)
const item = latestnews.querySelector(".slider");
const items = latestnews.querySelectorAll(".slider .boxtext");
const size = items[0].offsetWidth;
function sliderF(e){
  if(e.target.getAttribute("id")=="right" || e.target.getAttribute("id")=="right1"){
      left(items,item,size,counter1)
      }else if(e.target.getAttribute("id")=="left" ||e.target.getAttribute("id")=="left1"){
      right(items,item,size,counter1)
  }
}
let counter1 ={news:0}
/*Testimonials*/
const Testimonials = document.querySelector("#Testimonials")
const item1 = Testimonials.querySelector(".slider");
const items1 = Testimonials.querySelectorAll(".slider .boxtext");
const size1 = items[0].offsetWidth;
Testimonials.addEventListener("click",(e)=>{
  if(e.target.getAttribute("id")==right || e.target.getAttribute("id")=="right1"){
      left(items1,item1,size1,counter2)
      }else if(e.target.getAttribute("id")=="left" ||e.target.getAttribute("id")=="left1"){
      right(items1,item1,size1,counter2)
  }
})
let counter2 ={news:2}

//***/



function left(items,item,size,counter){
  if(counter.news>=items.length-1){
    item.style.transform="translateX("+size*(0)+"px)";
  counter.news = -1;
  }
  counter.news++;
  item.style.transform="translateX(-"+size*counter.news+"px)";
}
function right(items,item,size,counter){
    item.style.transition = '0.6s all'
  if(counter.news<=0){
item.style.transform="translateX("+size*(items.length-1)+"px)";
counter.news = items.length;
}
counter.news--;
item.style.transform="translateX(-"+size*counter.news+"px)";
}
  setInterval(function(){
 right(items1,item1,size1,counter2)
 right(items,item,size,counter1)
}, 3000);
/*****/
const boxelem = document.querySelector(".boxelemnts .insidebox nav ul");
const alink = boxelem.querySelectorAll("li a")
const childerb = boxelem.childNodes;
boxelem.addEventListener("click",(e)=>{
  e.preventDefault();
  if(e.target.getAttribute("id") =="active1")
    return;
  for(let i =0;i<alink.length;i++){
    if(alink[i].getAttribute('id')=="active1")
      alink[i].removeAttribute("id")
  }


    e.target.setAttribute("id","active1");

})
