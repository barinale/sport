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
// const sliderv = document.querySelector("#trainer article section ")
// const sliderpostion = document.querySelector("#trainer article section .sliders")
//
// const item3 = sliderv.querySelector("#trainer article section .items")
// const items3 = sliderv.querySelectorAll(".item");
// const counter4 = {news:0}
//
// let arr1 =[]
// let lastpostion2 =0;
// let windwosize1 = 0;
//
// sliderv.addEventListener("click",(e)=>{
//
//   if(windwosize1!=sliderpostion.offsetWidth)
//   {windwosize1=sliderpostion.offsetWidth;
//       lastpostion2=0;
//       arr1=[]
//       var rect = item.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
//       items3.forEach((item) => {
//          arr1.push(item.offsetTop -sliderpostion.offsetTop )
//       //  arr1.push(rect.top-sliderpostion.getBoundingClientRect().top)
//       console.log(item.offsetTop -sliderpostion.offsetTop+"**********")
//         if(parseInt(item.offsetTop)+parseInt(item.offsetHeight)<sliderpostion.offsetHeight)
//         {lastpostion2++;
//             console.log(sliderpostion.offsetHeight+"  / "+(parseInt(item.offsetTop)+parseInt(item.offsetHeight))+"/"+parseInt(sliderpostion.offsetTop))}
//       });
//
// }
//
//   if(e.target.getAttribute("id")=="right"||e.target.getAttribute("id")=="right1")
//   rightsliderv();
//   else if(e.target.getAttribute("id").left || e.target.getAttribute("id")=="left1")
//   leftsliderv();
//
// })
//
//
// function rightsliderv(){
//
//   if(counter4.news>=arr1.length-1||counter4.news+lastpostion2>=arr1.length )
//     counter4.news=-1;
//   counter4.news++;
//   item3.style.transform ="translateY(-"+arr1[counter4.news]+"px)";
// }
//
// function leftsliderv(){
//
//     if(counter4.news <=0 )
//       counter4.news=items3.length-lastpostion2+1 ;
//       counter4.news--;
//       item3.style.transform ="translateY(-"+arr1[counter4.news]+"px)";
// }
//
//


// console.log(itemsSlider.offsetTop);
// itemSlider.forEach((item, i) => {
//   console.log(item.offsetTop-itemsSlider.offsetTop)
// });
// itemsSlider.style.marginTop=-1100+"px";
class sliderObject{
  constructor(item,items,parent){
    this.item = item;
    this.items=items;
    this.parent = parent;
    this.Array= this.calcposition();
    this.itemShow =0;
    this.calcItemShow();
    this.sizeSpace=0;
    this.calculspace();
    this.position=0;
  }
  //method to setposition of itemlive
  calcposition(){
    let arrayP = [];

    this.item.forEach((itemm, i) => {
      arrayP.push((itemm.offsetTop+itemm.offsetHeight)-this.parent.offsetTop);
    });
    return arrayP;
  }
  //calcul the space between item
  calculspace(){
  this.sizeSpace= this.Array[1]-(this.Array[0]+this.item[0].offsetHeight);
  }
  // method to calcul how item shows
  calcItemShow(){
    this.itemShow=0;
    this.Array.forEach((item, i) => {
      if(item<this.parent.offsetHeight)
      this.itemShow++;
    });
  }
  buttonUp(){

      if(this.position +this.itemShow >=this.Array.length){
        this.position=0;

        }
        else{
          console.log(this.position);
          this.position+=this.itemShow;}
          if(this.position==0)
          this.items.style.marginTop="-0px";
          else
          this.items.style.marginTop="-"+(this.Array[this.position-1]-Math.ceil(this.sizeSpace/2))+"px";
      console.log(this.Array[this.position-1]-Math.ceil(this.sizeSpace/2))
  }
  buttonButton(){
    if(this.position==0){
      this.position=this.Array.length-1;
      this.items.style.marginTop="-0px";
    }else{
    console.log(this.position);
      this.position-=this.itemShow;
    this.items.style.marginTop="-"+(this.Array[this.position]+Math.ceil(this.sizeSpace/2))+"px";
    console.log((this.Array[this.position]-Math.ceil(this.sizeSpace/2)));
}
  }

}
const boxSlider = document.querySelector("#trainer article section .sliders");
const itemsSlider = boxSlider.querySelector(".items");
const itemSlider = boxSlider.querySelectorAll(".item");
  const sliderone = new sliderObject(itemSlider,itemsSlider,boxSlider);
boxSlider.parentNode.addEventListener("click",(e)=>{
if(e.target.getAttribute('id')=='right' || e.target.getAttribute('id')=='right1' ){
  sliderone.buttonButton();
}else if(e.target.getAttribute('id')=='left' || e.target.getAttribute('id')=='left1'){
  sliderone.buttonUp();
}


})


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
//   setInterval(function(){
//   right(items1,item1,size1,counter)
//   right(items,item,size,counter1)
// }, 3000);
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
