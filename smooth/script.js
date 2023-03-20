



let sections = [...document.querySelectorAll(".img")];
let slider = document.querySelector(".slider");

let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = 0.6;

window.addEventListener("resize", init);


function lerp(start, end, t){
  return start * (1-t) + end * t;
}

function setTransform(ele, transform){
  ele.style.transform = transform;
}

function init(){
  sliderWidth = slider.getBoundingClientRect().width;
  imageWidth = sliderWidth / sections.length;
  document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
}

function animate(){
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target = window.scrollY;
  setTransform(slider, `translateX(-${current}px)`)
  animateImages();
  requestAnimationFrame(animate)
}

function animateImages(){
  let ratio = current / imageWidth;
  let intersectionRatioValue;
  sections.forEach((image, idx) =>{
    intersectionRatioValue = ratio - (idx * 0.7);
    setTransform(image, `translateX(${intersectionRatioValue * 70})px`)
  })
}


init();
animate()