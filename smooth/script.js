var scrollContainer = document.querySelector("main")

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();

        var layer1Speed = 0.5;


    var scroll  =  scrollContainer.scrollLeft += evt.deltaY * layer1Speed;

    scrollContainer.style.transform = `translateX(-${scroll*layer1Speed})px`

  });
