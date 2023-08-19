const options = document.querySelectorAll(".rating__singleNum");
const submitButton = document.querySelector(".submitBtn");
const initScreen = document.querySelector(".rating__initScreen");
const tyScreen = document.querySelector(".rating__tyScreen");
const userRate = document.querySelector(".rating__userRate");

let selectedOption = null;
let previousOption = null;
let currentOption = null;

options.forEach((option) => {
  option.addEventListener("click", () => {
    selectedOption = option.textContent;

    if (currentOption) {
      currentOption.style.background = previousOption;
    }

    previousOption = option.style.backgroundColor;
    option.style.backgroundColor = "#7c8798";
    option.style.color = "#fff";
    currentOption = option;
  });
});

submitButton.addEventListener("click", async (e) => {
  if (selectedOption) {
    setTimeout(() => {
      initScreen.classList.toggle("dNone");
      tyScreen.classList.toggle("dBlock");
      userRate.textContent = selectedOption;
    }, 700);
  } else {
    alert("You must choose any rate before submit");
  }
});
