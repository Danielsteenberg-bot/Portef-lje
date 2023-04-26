setTimeout(function() {
    document.querySelector('.loader-container').classList.add("fade-out");
    document.querySelector('.page').style.display = 'block';
}, 200);



const sections = document.querySelectorAll('section');


const options = {
  rootMargin: '-50px 0px', 
  threshold: 0.10 
};


const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) { 
      entry.target.style.opacity = '1'; 
      entry.target.style.transition = 'opacity 1s'; 
      observer.unobserve(entry.target); 
    } else {
      entry.target.style.opacity = '0'; 
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach(section => {
  observer.observe(section);
});

window.addEventListener("resize", redirect);


function redirect(){
if (window.innerWidth > 600) {
    window.location.href = 'https://stonedesigns.dk';
    return;
  }
}