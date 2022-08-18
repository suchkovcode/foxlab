if (window.location.pathname == "/" ) {
   const openModal = document.getElementById("popUpBtn");
   const closeModal = document.getElementById("popUpClose");
   const sucBtn = document.querySelector(".form__btn");
   const modal = document.querySelector(".modal");
   const body = document.querySelector(".page");
   const overlay = document.querySelector(".modal__overlay");
   
   openModal.addEventListener("click", () => {
      body.classList.add("pop-up");
      modal.classList.add("open");
   });
   closeModal.addEventListener("click", () => {
      body.classList.remove("pop-up");
      modal.classList.remove("open");
   });
   overlay.addEventListener("click", () => {
      modal.classList.remove("open");
   });
   
   const validate = new window.JustValidate(".form", {
      errorFieldCssClass: "form__input-error",
      successFieldCssClass: "form__input-success",
   
      errorLabelCssClass: "form__label-error",
      successLabelCssClass: "form__label-success",
   
      focusInvalidField: true,
      lockForm: true,
   });
   
   validate
      .addField("#inputName", [
         {
            rule: "minLength",
            value: 3,
            errorMessage: "At least 3 characters",
         },
         {
            rule: "maxLength",
            value: 15,
            errorMessage: "Maximum 15 characters",
         },
         {
            rule: "required",
            errorMessage: "Required field",
         },
      ])
      .addField("#inputTel", [
         {
            rule: "required",
            errorMessage: "Required field",
         },
         {
            rule: "minLength",
            value: 7,
            errorMessage: "At least 7 characters",
         },
         {
            rule: "maxLength",
            value: 13,
            errorMessage: "Maximum 13 characters",
         },
      ]);
      var cleave = new Cleave('#inputTel', {
         phone: true,
         phoneRegionCode: 'US'
      });
   
 }

