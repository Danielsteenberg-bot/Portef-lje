/* const body = document.querySelector("body");

body.addEventListener("sroll", (event) =>{
  event.preventDefault();

  var layerspeed = 0.5;

  var scroll = body.scrollLeft

  body.style.transform = `translateX(-${scroll * layerspeed})px`

  console.log("Body skulles scrolles så meget" + scroll)
})
 */






  var scrollContainer = document.querySelector(".main-container");
  var mainContainer = document.querySelector("main");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();

              var layer1Speed = 0.5;


          var scroll  =  scrollContainer.scrollLeft += evt.deltaY * layer1Speed;

          mainContainer.style.transform = `translateX(-${scroll*layer1Speed})px`

        });


  
 

  // Get the container element
      var container = document.querySelector(".parallax-container");
      


      
            // Get the layers

      /* LANDING */
      var landing = document.querySelector(".landing-txt-container");
      
      /*SECTIONS  */
      var website = document.querySelectorAll(".website-wrapper");
      


      /* PARALLAX IMGS */
      var layer1 = document.querySelectorAll(".parallax-layer1");
      var layer2 = document.querySelectorAll(".parallax-layer2");
      var layerLast = document.querySelector(".last");
      var lastContainer = document.querySelector(".last-main-container")
      

      // Set the speed of each layer
      var layer1Speed = 1.32352235;
      var layer2Speed = .75325253252;
      var layer3Speed = .45325253252;
      var layer4Speed = .55325253252;
      var layer5Speed = .65325253252;

      
      const scrollContainer2 = document.querySelector("main");

      scrollContainer2.addEventListener("scroll", (evt) => {


        var scrolled = scrollContainer2.scrollLeft;



        /* Landing */
        landing.style.transform = `translateX(-${scrolled * layer1Speed}px)`;


        /* Sektioner parallax */
        for(let i = 0; i < website.length; i++){
          website[i].style.transform = `translateX(-${scrolled * layer4Speed}px)`;

        }

        /* IMG PARA */

        for(let a = 0; a < layer1.length; a++){
          layer1[a].style.transform = `translateX(-${scrolled * layer5Speed}px)`;
        }console.log(scrolled * layer1Speed)

        for(let a = 0; a < layer1.length; a++){
          layer2[a].style.transform = `translateX(-${scrolled * layer2Speed}px)`;
        }
      
        if(landing.getBoundingClientRect().left < -1){
          console.log("Landing ude")
        }


        console.log(layerLast.getBoundingClientRect().right)

        if(layerLast.getBoundingClientRect().right < 2000){
          lastContainer.classList.add("last-active");
        }




    });

 

     


