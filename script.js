let sections = [...document.querySelectorAll(".sections")];
let slider = document.querySelector(".slider");
let headers = document.querySelectorAll("h5")
let navItems = document.querySelectorAll(".nav-item")

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
  if (axis === "y") {
    ele.style.transform = `translate3d(0, ${transform}, 0)`;
  } else {
    ele.style.transform = `translate3d(${transform}, 0, 0)`;
  }

}

let prevHeader = null;

function init(){
  sliderWidth = slider.getBoundingClientRect().width;
  imageWidth = sliderWidth / sections.length;
  
  if (window.innerWidth < 600) {
    window.location.href = 'https://stonedesigns.dk/mobile';
    return;
  }
  
  document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
  

  
  let activeNavLink = null;

  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const sectionId = entry.target.getAttribute('id');
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);
  
      if (navLink) {
        if (entry.isIntersecting) {
          // Add "active" class to the nav link
          navLink.classList.add("active");
  
          // Remove "active" class from the previous nav link
          if (activeNavLink && activeNavLink !== navLink) {
            activeNavLink.classList.remove("active");
          }
  
          // Update the active nav link
          activeNavLink = navLink;
        }
      }
    });
  }, { threshold: 0.1 });
  
  // Attach the observer to each section
  document.querySelectorAll('section').forEach(section => {
    headerObserver.observe(section);
  });
  

  headers.forEach(header => headerObserver.observe(header));


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio < 0.55) {
/*         console.log("out", entry.target);
 */        entry.target.classList.add("fadeOut");
        entry.target.classList.remove("fadeIn");
      } else {
/*         console.log("in", entry.target);
 */        entry.target.classList.remove("fadeOut");
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
    setTransform(slider, `-${current}px`, "y");
  } else {
    setTransform(slider, `-${current}px`);
  }

  
  animateImages();
  requestAnimationFrame(animate);
}

/* function animateImages() {
  img.forEach((element, index) => {
    const imgWidth = element.offsetWidth;
    const parentWidth = element.parentElement.offsetWidth;
    const parentOffsetLeft = element.parentElement.getBoundingClientRect().left;
    const imgOffsetLeft = element.getBoundingClientRect().left;
    const offset = ((current - (index * imageWidth*2)) / sliderWidth) + ((imgOffsetLeft - parentOffsetLeft) / parentWidth) - 0.5;
    const translateX = (offset * sliderWidth) + (sliderWidth / 2) - (imgWidth / 2 * 2);
    setTransform(element, `-${translateX}px`);
  });
} */

/* function setTransformX(ele, x) {
  ele.style.transform = `translate3d(${x}px, 0, 0) translateZ(0)`;
}
 */

function animateImages() {
/*   img.forEach((ele) => {
    const speed = parseFloat(ele.getAttribute("data-speed"));
    const xPos = window.pageXOffset * speed;
    setTransformX(ele, xPos);
  }); */
}









init();
animate();



