const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const slides = document.querySelectorAll(".slide");
const circles = document.getElementsByClassName("circle");

for(let i = 0; i < circles.length; i++){
    circles[i].addEventListener("click",()=>{
        circleBg(i);
        slideImg(i);
    })
}
const circleBg = (counter) =>{
    for(let i=0 ;i<circles.length;i++){
        circles[i].style.backgroundColor ="grey"
    }
    circles[counter].style.background = "coral";
}
let counter = 0;
circles[0].style.background = "coral";
slides.forEach((slide,idx) =>{
    slide.style.left = `${idx*100}%`;
})

const slideImg = (counter) =>{
    // console.log("inside slideImg")
    slides.forEach((slide) =>{
        slide.style.transform = `translateX(-${counter*100}%)`;
    })
}
rightBtn.addEventListener("click",()=>{
   counter++;
   if(counter > 3) counter = 0;
   slideImg(counter);
   circleBg(counter);
   
})
leftBtn.addEventListener("click",()=>{
    counter--;
  if(counter < 0 ) counter = 3;
    slideImg(counter);
    circleBg(counter);
 })