export const parallaks = (() => {
   if (window.innerWidth > 992 && window.location.pathname == '/') {
      const image = document.querySelector(".section-3__img-1");
      const image2 = document.querySelector(".section-3__img-2");
      const image3 = document.querySelector(".section-4__img-1");
      const image4 = document.querySelector(".section-4__img-4");
      const image5 = document.querySelector(".section-4__img-5");
      const image6 = document.querySelector(".section-4__img-2");
   
      new simpleParallax(image, {
         orientation: "up",
         overflow: true,
      });
      new simpleParallax(image2, {
         orientation: "down",
         overflow: true,
      });
      new simpleParallax(image3, {
         orientation: "down",
         overflow: true,
      });
      new simpleParallax(image4, {
         orientation: "up",
         overflow: true,
      });
      new simpleParallax(image5, {
         orientation: "right",
         overflow: true,
      });
      new simpleParallax(image6, {
         orientation: "left",
         overflow: true,
      });
   }
})();

