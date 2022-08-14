window.addEventListener("DOMContentLoaded", () => {
   const openModal = document.getElementById("popUpBtn");
   const closeModal = document.getElementById("popUpClose");
   const modal = document.querySelector(".modal");
   const body = document.querySelector(".page");
   const wraper = document.querySelector(".modal__wraper");

   openModal.addEventListener("click", () => {
      body.classList.add("pop-up");
      modal.classList.add("open");
   });
   closeModal.addEventListener("click", () => {
      body.classList.remove("pop-up");
      modal.classList.remove("open");
   });

   const element = document.getElementById("input2");
   const maskOptions = {
      mask: "+{0}(000)000-00-00",
      lazy: false, 
   };
   const mask = IMask(element, maskOptions);
});
