"use strict";

var singleNum = document.querySelectorAll(".rating__singleNum");
var numArr = Array.from(singleNum);
var currentNum = null;
var previousNum = null;
numArr.forEach(function (item) {
  item.addEventListener("click", function () {
    if (currentNum !== null) {
      currentNum.style.backgroundColor = previousNum;
    }

    previousNum = item.style.backgroundColor;
    item.style.backgroundColor = "#7c8798";
    item.style.color = "#fff";
    currentNum = item;
  });
});
var submit = document.querySelector('.submitBtn');
submit.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('test');
});