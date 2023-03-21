let sections = [...document.querySelectorAll(".sections")];
let slider = document.querySelector(".slider");

let img = document.querySelectorAll("img");

console.log(img)

let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = 0.6;

let isSmallScreen = window.innerWidth < 600;
let scrollDirection = isSmallScreen ? 'vertical' : 'horizontal';

window.addEventListener("resize", () => {
  isSmallScreen = window.innerWidth < 600;
  scrollDirection = isSmallScreen ? 'vertical' : 'horizontal';
  init();
});


function lerp(start, end, t){
  return start * (1-t) + end * t;
}

function setTransform(ele, transform){
  ele.style.transform = transform;
}

function init(){
  sliderWidth = slider.getBoundingClientRect()[scrollDirection === 'vertical' ? 'height' : 'width'];
  imageWidth = sliderWidth / sections.length;
  if (scrollDirection === 'vertical') {
    document.body.style.height = `${sections.length * sliderWidth}px`;
  } else {
    document.body.style.height = '';
  }

  // observe all the sections for intersection with the viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio < 0.55) {
        console.log("out", entry.target);
        entry.target.classList.add("fadeOut");
        entry.target.classList.remove("fadeIn");


      } else {
        console.log("in", entry.target);
        entry.target.classList.remove("fadeOut");
        entry.target.classList.add("fadeIn");

      }
    });
  }, { threshold: 0.55 });

  sections.forEach(section => observer.observe(section));
}

function animate(){
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target = scrollDirection === 'vertical' ? window.scrollY : current;
  setTransform(slider, scrollDirection === 'vertical' ? `translateY(-${current}px)` : `translateX(-${current}px)`);
  animateImages();
  requestAnimationFrame(animate)
}

function animateImages(){
  let ratio = current /
