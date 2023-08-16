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
var submit = document.querySelector(".submitBtn");
var initScreen = document.querySelector(".rating__initScreen");
var tyScreen = document.querySelector(".rating__tyScreen");
var result = document.querySelector(".rating__result");
submit.addEventListener("click", function _callee(e) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          _context.next = 3;
          return regeneratorRuntime.awrap(new Promise(function (resolve) {
            return setTimeout(resolve, 1000);
          }));

        case 3:
          initScreen.classList.toggle("dNone");
          tyScreen.classList.toggle("dBlock");
          console.log("test");

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});