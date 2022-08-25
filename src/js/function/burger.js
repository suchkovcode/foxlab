export const burger = (() => {
   const burger = document.querySelector(".header__toggler");
   const dropdown = document.querySelector(".header__dropdown-toggle");
   
   burger.addEventListener("click", () => {
      const nav = document.querySelector(".header__nav");
      const logo = document.querySelector(".header__logo-img");
      const burgerIcon = document.querySelector(".header__toggler-icon");
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
})();

