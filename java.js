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

if(upcomung.getBoundingClientRect().top<headers.offsetHeight/1.2){
  if(upcomungitem.style.opacity=="1")
  {return;}
  upcomungitem.style.opacity="1";
  upcomungitem.style.transform ="translateY("+0+"%)";
}})

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
const size1 = items1[0].offsetWidth;
Testimonials.addEventListener("click",(e)=>{
  if(e.target.getAttribute("id")=="right" || e.target.getAttribute("id")=="right1"){
      left(items1,item1,size1,counter2)
      }else if(e.target.getAttribute("id")=="left" ||e.target.getAttribute("id")=="left1"){
      right(items1,item1,size1,counter2)
  }
})
let counter2 ={news:2}
/****/
const upcoming = document.querySelector("#upcomingEvenets article")
const item2 = upcoming.querySelector(".items");
const items2 = upcoming.querySelectorAll(".item");
let windosize = 0;
let conter3 = {news:0}
let arr = [];
let lastpostion = 0;//
upcoming.addEventListener("click",(e)=>{

  if(windosize!=window.innerWidth){
    lastpostion=0;
    windosize = window.innerWidth;
    item2.classList.add("notransition");
    item2.style.transform ="translateX(-"+0+"px)"
    conter3.news = 0;
    arr = []
     items2.forEach((item,i) => {
    arr.push(item.getBoundingClientRect().left);
    if(item.getBoundingClientRect().right>windosize){
      lastpostion++;
    }
    });
    item2.classList.remove("notransition");
    }
  if(e.target.getAttribute("id")=="right"||e.target.getAttribute("id")=="right1"){
    rightslider(item2,conter3);
  }else if (e.target.getAttribute("id")=="left"||e.target.getAttribute("id")=="left1")
    leftslider(item2,conter3)
})

function rightslider(item,counter){
  if(counter.news>=arr.length-1 || items2[arr.length-1].getBoundingClientRect().right<windosize)
    counter.news=-1;

  counter.news++;
  item.style.transform ="translateX(-"+(arr[counter.news]-10)+"px)";
}
function leftslider(item,counter){
  if(counter.news<=0 )
  {  counter.news=lastpostion+1;}
  counter.news--;
  item.style.transform ="translateX(-"+(arr[counter.news])+"px)";

}

/*******/
const sliderv = document.querySelector("#trainer article section ")
const sliderpostion = document.querySelector("#trainer article section .sliders")

const item3 = sliderv.querySelector("#trainer article section .items")
const items3 = sliderv.querySelectorAll(".item");
const counter4 = {news:0}
let arr1 =[]
let windwosize1 = 0;
sliderv.addEventListener("click",(e)=>{
  if(windwosize1!=window.innerWidth)
  {windwosize1=window.innerWidth;
      items3.forEach((item, i) => {
    arr1.push(item.getBoundingClientRect().bottom);
  });}

  if(e.target.getAttribute("id")=="right"||e.target.getAttribute("id")=="right1")
  rightsliderv();
  else if(e.target.getAttribute("id").left || e.target.getAttribute("id")=="left1")
  leftsliderv();

})

function rightsliderv(){
  item3.style.transform ="translateY(-"+arr1[counter4.news]+"px)";
  console.log(arr1[counter4.news])
  console.log(sliderpostion.getBoundingClientRect().bottom)
  counter4.news++;
}












//***/
function left(items,item,size,counter){
  if(counter.news>=items.length-1){
    item.style.transform="translateX("+size*(0)+"px)";
  counter.news = -1;
  }
  counter.news++;
  item.style.transform="translateX(-"+size*counter.news+"px)";
}
function right(items,item,size,counter,itemsize){
  if(counter.news<=0){
item.style.transform="translateX("+size*(items.length-1)+"px)";
counter.news = items.length;
}
counter.news--;
item.style.transform="translateX(-"+size*(counter.news)+"px)";
}
  setInterval(function(){
  right(items1,item1,size1,counter)
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
/*testing**/
