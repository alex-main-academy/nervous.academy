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

    const name = event.currentTarget.elements.name.value;
    const surname = event.currentTarget.elements.surname.value;
    const email = event.currentTarget.elements.email.value;
    const phone = event.currentTarget.elements.phone.value;

    const DATA = { name, surname, email, phone };

    console.log(DATA)

    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DATA),
    };

    fetch("https://crm.7leads.xyz/api/redirect/academy", options)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Произошла ошибка сети");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            window.location.href = "https://edu.nervous.academy/courses/media-buyer-ai-tovarna-vertikal-2-potik-IrT";
        })
        .catch((error) => {
            console.error("Произошла ошибка:", error);
        });

    // let xhr = new XMLHttpRequest();

    // xhr.withCredentials = true;

    // let url = "https://crm.7leads.xyz/api/redirect/academy";

    // xhr.open("POST", url);

    // xhr.send(DATA);

    // console.log(DATA)

    // xhr.onload = () => {
    //     console.log(DATA)
    //     window.location.href = 'https://edu.nervous.academy/courses/media-buyer-ai-tovarna-vertikal-2-potik-IrT';
    //     // location.replace("https://nervous.academy/thank-mbai-you/");
    // };
});

formInputArray.forEach((elem) => {
    elem.addEventListener("input", () => {
        if (
            formInputArray[0].value !== "" &&
            formInputArray[1].value !== "" &&
            formInputArray[2].value !== "" &&
            formInputArray[3].value !== ""
        ) {
            formSubmitButton.classList.add("form__button_active");
        } else {
            formSubmitButton.classList.remove("form__button_active");
        }
    });
});
