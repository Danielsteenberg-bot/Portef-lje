/* var scrollContainer = document.querySelector("main")

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();

        var layer1Speed = 0.5;


    var scroll  =  scrollContainer.scrollLeft += evt.deltaY * layer1Speed;

    scrollContainer.style.transform = `translateX(-${scroll*layer1Speed})px`

  });
 */

  const container = document.querySelector('.scroll-container');
const content = document.querySelector('.scroll-content');

// add event listener for scroll events
container.addEventListener('scroll', handleScroll);

// function to handle scroll events
function handleScroll(event) {
  const scrollLeft = event.target.scrollLeft;
  console.log(`Container scrolled to ${scrollLeft}px`);
}

