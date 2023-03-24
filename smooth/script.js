let sections = [...document.querySelectorAll(".sections")];
let slider = document.querySelector(".slider");
let headers = document.querySelectorAll("h5")

console.log(headers)

let img = document.querySelectorAll(".ele");


let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = 0.6;

window.addEventListener("resize", init);


function lerp(start, end, t){
  return start * (1-t) + end * t;
}



function setTransform(ele, transform, axis = "x") {
  ele.style.transform = `translate${axis.toUpperCase()}(${transform})`;
}

let prevHeader = null;

function init(){
  sliderWidth = slider.getBoundingClientRect().width;
  imageWidth = sliderWidth / sections.length;
  
  if (window.innerWidth < 600) {
    document.body.style.overflowY = 'scroll';
  }
  
  document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`


  
  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("test");
        entry.target.classList.add("nav-active")
      }
      else {
        entry.target.classList.remove("nav-active");
      }
    });
  }, { threshold: 0.55 });



  
  headers.forEach(header => headerObserver.observe(header));


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
  img.forEach(section => observer.observe(section));
}


function animate() {
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target = window.scrollY;
  if (window.innerWidth < 600) {
    
    setTransform( axis = "y",slider, `${current}px`, "y");
  } else {
    setTransform(slider, `-${current}px`);
  }
  animateImages();
  requestAnimationFrame(animate);
}

function animateImages() {
  let ratio = current / imageWidth;
  let intersectionRatioValue;
  sections.forEach((image, idx) => {
    intersectionRatioValue = ratio - idx * 0.7;
    if (window.innerWidth < 600) {
      setTransform(image, `${intersectionRatioValue * 70}px`, "Y");
    } else {
      setTransform(image, `${intersectionRatioValue * 70}px`);
    }
  });
  img.forEach((image, idx) => {
    intersectionRatioValue = ratio - idx * 0.7;
    let parallaxAmount = intersectionRatioValue * 140 +4;
    setTransform(image, `${parallaxAmount+4}px`);
  });
}





init();
animate();



