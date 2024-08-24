"use strict";
import "./style.css";

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const firstNum = document.querySelector(".first");
const secondNum = document.querySelector(".second");
const dotBtn = document.querySelector(".dot");
const zeroBtn = document.querySelector(".zero");
const equalBtn = document.querySelector(".equal");
const plusBtn = document.querySelector(".plus");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const minusBtn = document.querySelector(".minus");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const multiplyBtn = document.querySelector(".multiply");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const divideBtn = document.querySelector(".division");
const numbers = document.querySelectorAll(".numbers");
const operation = document.querySelectorAll(".operation");
let prviBroj = "";
let drugiBroj = "";
let operacija = "";
numbers.forEach((num) => {
  num.addEventListener("click", function () {
    if (prviBroj.startsWith("0")) {
      prviBroj = num.textContent;
      console.log(prviBroj);
      prviBrojDisplay();
      return;
    }
    if (num.textContent === "0" && prviBroj.startsWith("0")) {
      return;
    }
    prviBroj += num.textContent;
    prviBrojDisplay();
  });
});

// zeroBtn.addEventListener('click', function() {
//   if(prviBroj === '' )
// })

equalBtn.addEventListener("click", function () {
  if (drugiBroj !== "") {
    drugiBroj = calculate(operacija);
    secondNum.textContent = drugiBroj;
    prviBroj = "";
    prviBrojDisplay();
  }
});

deleteBtn.addEventListener("click", function () {
  removeLastChar();
  prviBrojDisplay();
});

function removeLastChar() {
  prviBroj = prviBroj.slice(0, -1);
}

function hasRepeats(str) {
  return /(.).*\1/.test(str);
}

dotBtn.addEventListener("click", function () {
  if (dotBtn.textContent === "." && prviBroj.includes(".")) {
    return;
  } else {
    prviBroj = prviBroj + dotBtn.textContent;
    prviBrojDisplay();
  }
  // if (prviBroj !== "" && !prviBroj.includes(".")) {
  //   prviBroj = prviBroj + dotBtn.textContent;
  //   prviBrojDisplay();
  // }
});

operation.forEach((operation) => {
  operation.addEventListener("click", function () {
    if (prviBroj !== "" && drugiBroj === "") {
      drugiBroj = parseFloat(prviBroj);
      prviBroj = "";
      operacija = operation.textContent;
      drugiBrojDisplay();
      prviBrojDisplay();
    } else if (
      prviBroj !== "" &&
      drugiBroj === "" &&
      !prviBroj.endsWith("0") &&
      !prviBroj.includes(".")
    ) {
      drugiBroj = prviBroj;
      prviBroj = "";
      operacija = operation.textContent;
      drugiBrojDisplay();
      prviBrojDisplay();
    } else if (drugiBroj !== "" && prviBroj !== "" && operacija !== "") {
      drugiBroj = calculate(operacija);
      prviBroj = "";
      operacija = operation.textContent;
      drugiBrojDisplay();
      prviBrojDisplay();
    }
  });
});
function calculate(operationType) {
  let c;
  switch (operationType) {
    case "+":
      c = Number(prviBroj) + Number(drugiBroj);
      break;
    case "-":
      c = Number(drugiBroj) - Number(prviBroj);
      break;
    case "/":
      c = Number(drugiBroj) / Number(prviBroj);
      break;
    case "*":
      c = Number(drugiBroj) * Number(prviBroj);
      break;
  }
  return parseInt(c);
}

function prviBrojDisplay() {
  firstNum.textContent = prviBroj;
}

function drugiBrojDisplay() {
  secondNum.textContent = `${drugiBroj}${operacija}`;
}

clearBtn.addEventListener("click", function () {
  prviBroj = "";
  drugiBroj = "";
  operacija = "";
  prviBrojDisplay();
  drugiBrojDisplay();
});

prviBrojDisplay();
drugiBrojDisplay();
