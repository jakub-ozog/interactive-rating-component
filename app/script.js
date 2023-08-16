const singleNum = document.querySelectorAll(".rating__singleNum");
const numArr = Array.from(singleNum);

let currentNum = null;
let previousNum = null;

numArr.forEach((item) => {
  item.addEventListener("click", () => {
    if (currentNum !== null) {
      currentNum.style.backgroundColor = previousNum;
    }

    previousNum = item.style.backgroundColor;
    item.style.backgroundColor = "#7c8798";
    item.style.color = "#fff";
    currentNum = item;
  });
});



const submit = document.querySelector(".submitBtn");
const initScreen = document.querySelector(".rating__initScreen");
const tyScreen = document.querySelector(".rating__tyScreen");
let result = document.querySelector(".rating__result");

submit.addEventListener("click", async (e) => {
  e.preventDefault();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  initScreen.classList.toggle("dNone");
  tyScreen.classList.toggle("dBlock");
  
  


  console.log("test");
});
