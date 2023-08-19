"use strict";

var options = document.querySelectorAll(".rating__singleNum");
var submitButton = document.querySelector(".submitBtn");
var initScreen = document.querySelector(".rating__initScreen");
var tyScreen = document.querySelector(".rating__tyScreen");
var userRate = document.querySelector(".rating__userRate");
var selectedOption = null;
var previousOption = null;
var currentOption = null;
options.forEach(function (option) {
  option.addEventListener("click", function () {
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
submitButton.addEventListener("click", function _callee(e) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (selectedOption) {
            setTimeout(function () {
              initScreen.classList.toggle("dNone");
              tyScreen.classList.toggle("dBlock");
              userRate.textContent = selectedOption;
            }, 700);
          } else {
            alert("You must choose any rate before submit");
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});