let sections = [...document.querySelectorAll(".sections")];
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


let items = document.querySelectorAll(".item");



window.addEventListener("scroll", () =>{

  console.log(items[0].getBoundingClientRect().left)

  if(items[0].getBoundingClientRect().left < -300){
  console.log("out")
  items[0].classList.add("fadeOut")
  items[0].classList.remove("fadeIn")
  }

  if(items[0].getBoundingClientRect().left < 0){
  console.log("in")
  items[0].classList.add("fadeIn")
  items[0].classList.remove("fadeOut")

  }

  
})




/* console.log(sections)

for(i = 0; i < sections.length; i++){
  let sectionLeft = sections[i].getBoundingClientRect().left;
  console.log(sectionLeft)


} */

init();
animate()