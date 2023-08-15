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


const submit = document.querySelector('.submitBtn');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('test');
})