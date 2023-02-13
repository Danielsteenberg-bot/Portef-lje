    // Get the body element
    var body = document.querySelector("body");
      
    
    // Add a mousewheel event listener to the body
    body.addEventListener("wheel", function(event) {
      // Prevent the default behavior (vertical scrolling)
      event.preventDefault();
      
      // Scroll horizontally by the amount of the mouse wheel delta
      body.scrollLeft -= event.wheelDelta;
    });
      
  // Get the container element
  var container = document.querySelector(".parallax-container");
      
  // Get the layers
  var layer1 = document.querySelector("#layer1");
  var layer2 = document.querySelector("#layer2");
  
  // Set the speed of each layer
  var layer1Speed = 2;
  var layer2Speed = 1.5;
  
  // Listen for the scroll event
  window.addEventListener("scroll", function() {
    // Calculate the scroll position of each layer
    var scrollPosition = window.pageYOffset;
    var layer1Position = scrollPosition * layer1Speed;
    var layer2Position = scrollPosition * layer2Speed;
    
    // Set the position of each layer
    layer1.style.transform = "translateY(" + layer1Position + "px)";
    layer2.style.transform = "translateY(" + layer2Position + "px)";
  });