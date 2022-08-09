window.addEventListener("DOMContentLoaded", () => {
   const nav = document.querySelector(".header__nav");
   const logo = document.querySelector(".header__logo");
   const burger = document.querySelector(".header__toggler");
   const burgerIcon = document.querySelector(".header__toggler-icon");
   const dropdown = document.querySelector(".header__dropdown-toggle");

   burger.addEventListener("click", () => {
      if (screen.width < 992) {
         burger.classList.toggle("active");
         burgerIcon.classList.toggle("active");
         nav.classList.toggle("active");
         logo.classList.toggle("active");
      }
   });
   dropdown.addEventListener("click", () => {
      if (screen.width < 992) {
         dropdown.classList.toggle("active");
      }
   });
});
