  let scrollContainer = document.querySelector(".main-container");
  let mainContainer = document.querySelector("main");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
              let layer1Speed = 0.5;
          let scroll  =  scrollContainer.scrollLeft += evt.deltaY * layer1Speed;
        });


  
 

  // Get the container element
      let container = document.querySelector(".parallax-container");
            
      // Get the layers

      /* LANDING */
      let landing = document.querySelector(".landing-txt-container");
      
      /*SECTIONS  */
      let website = document.querySelectorAll(".website-wrapper");

      /* txt-containers */

      let txtWebsite = document.querySelector(".underpage-txt-container")
      let logoWebsite = document.querySelector(".website-logo-container")
      let txtSEO = document.querySelector(".seo-container")
      let logoSEO = document.querySelector(".seo-logo-container")
      


      /* PARALLAX IMGS */
      let layer1 = document.querySelector(".parallax-layer1");

      let layer2 = document.querySelector(".parallax-layer2");

      let layer3 = document.querySelector(".parallax-layer3");

      let layer4 = document.querySelector(".parallax-layer4");

      let layerLast = document.querySelector(".last");
      let lastContainer = document.querySelector(".last-main-container")
      

      // Set the speed of each layer
      let layer1Speed = 1.32352235;
      let layer2Speed = 1.0325253252;
      let layer3Speed = .845325253252;
      let layer4Speed = .55325253252;
      let layer5Speed = .65325253252;


      const rectWebsite = website[0].getBoundingClientRect();

      
      const scrollContainer2 = document.querySelector("main");

      scrollContainer2.addEventListener("scroll", (evt) => {


        let scrolled = scrollContainer2.scrollLeft;

        /* Landing */
        landing.style.transform =  `translate3d(-${scrolled * layer4Speed}px,0,0)`;


        /* Sektioner parallax */
        for(let i = 0; i < website.length; i++){
          website[i].style.transform = `translate3d(-${scrolled * layer5Speed}px,0,0)`;
        }

        /* IMG PARA */
          layer1.style.transform =  `translate3d(-${scrolled * layer5Speed}px,0,0)`;
          if(layer1.getBoundingClientRect().right < 1900){
              txtWebsite.classList.add("fadeDown");
              logoWebsite.classList.add("fadeUP")
          }


          if(txtWebsite.getBoundingClientRect().right < 800){
            txtWebsite.classList.remove("fadeDown");
            logoWebsite.classList.remove("fadeUP")
            txtWebsite.classList.add("fadeOut");
            logoWebsite.classList.add("fadeOut");
          }


          if(txtWebsite.getBoundingClientRect().right > 840){
            txtWebsite.classList.add("fadeDown");
            logoWebsite.classList.add("fadeUP")
            txtWebsite.classList.remove("fadeOut");
            logoWebsite.classList.remove("fadeOut");
          }


          if(layer1.getBoundingClientRect().right < 550){
            layer1.classList.add("fade");
            layer1.classList.remove("fadeBack");
          }


          if(layer1.getBoundingClientRect().right > 550){
            layer1.classList.remove("fade");
            layer1.classList.add("fadeBack");
          }



          /* IMG 2 */
          layer2.style.transform =  `translate3d(-${scrolled * layer2Speed}px,0,0)`;

          if(layer2.getBoundingClientRect().right < 750){
            layer2.classList.add("fade");
            layer2.classList.remove("fadeBack");
          }

          if(layer2.getBoundingClientRect().right > 750){
            layer2.classList.remove("fade");
            layer2.classList.add("fadeBack");
          }


          /* Section */


          /* IMG 3  */
          layer3.style.transform =  `translate3d(-${scrolled * layer5Speed}px,0,0)`;

          if(txtSEO.getBoundingClientRect().right < 2150){
            txtSEO.classList.add("fadeDown");
            logoSEO.classList.add("fadeUP");
            txtSEO.classList.remove("fadeOut");
            logoSEO.classList.remove("fadeOut");
          }
          if(txtSEO.getBoundingClientRect().right < 900){
            txtSEO.classList.remove("fadeDown");
            logoSEO.classList.remove("fadeUP");
            txtSEO.classList.add("fadeOut");
            logoSEO.classList.add("fadeOut");
          }

          if(layer3.getBoundingClientRect().right < 1500){
            layer3.classList.add("fadeBack");
            layer3.classList.remove("fade");

          }
          if(layer3.getBoundingClientRect().right < 500){
            layer3.classList.add("fade");
            layer3.classList.remove("fadeBack");
          }


          /* IMG 4  */
          layer4.style.transform =  `translate3d(-${scrolled * layer3Speed}px,0,0)`;


          console.log( "her er den" + " " + txtSEO.getBoundingClientRect().right)


        if(landing.getBoundingClientRect().left < -1){
        }




        if(layerLast.getBoundingClientRect().right < 2000){
          lastContainer.classList.add("last-active");
        }




    });

 

     


