const openModalButton = document.querySelector(".js-open-modal");
const closeModalButton = document.querySelector(".js-close-modal");
const modal = document.querySelector(".js-modal");
const overlay = document.querySelector(".js-overlay");

const handleOpenModal = () => {
  overlay.style.cssText = `
        opacity: 1;
        visibility: visible;
    `;

  document.body.style.overflowY = "hidden";
};

const handleCloseModal = () => {
  overlay.style.cssText = `
        opacity: 0;
        visibility: hidden;
    `;
  document.body.style.overflowY = "auto";
};

openModalButton.addEventListener("click", handleOpenModal);
closeModalButton.addEventListener("click", handleCloseModal);
overlay.addEventListener("click", (event) => {
  if (event.target.classList.contains("overlay")) {
    handleCloseModal();
  } else {
    return;
  }
});

// form submit
const form = document.querySelector(".js-form");
const formSubmitButton = document.querySelector(".js-form-submit");
const formInputArray = document.querySelectorAll(".js-form-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const DATA = new FormData(form);
  //
  let xhr = new XMLHttpRequest();

  let url = form.getAttribute("action");

  xhr.open("POST", url);

  xhr.send(DATA);

  xhr.onload = () => {
    location.replace("https://nervous.academy/mbairec/thank-mbai-you/");
  };
});

formInputArray.forEach((elem) => {
  elem.addEventListener("input", () => {
    if (
      formInputArray[0].value !== "" &&
      formInputArray[1].value !== "" &&
      formInputArray[2].value !== ""
    ) {
      formSubmitButton.classList.add("form__button_active");
    } else {
      formSubmitButton.classList.remove("form__button_active");
    }
  });
});
