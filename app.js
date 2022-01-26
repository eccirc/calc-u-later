//Create a calculator object to hold all relevant calulator based things

const calc = {
  prevVal: 0,
  currentVal: 0,
  isNextVal: false,
  operand: "+",
  displayValue: "",
  calculate: null,
};

//CALCULATOR LOGIC SANDBOX
//const operand = "+";

const calculate = () => {
  output = 0;
  switch (calc.operand) {
    case "+":
      output = calc.prevVal + calc.currentVal;
      break;
    case "-":
      output = calc.prevVal - calc.currentVal;
      break;
    case "*":
      output = calc.prevVal * calc.currentVal;
      break;
    case "/":
      output = calc.prevVal / calc.currentVal;
      break;
    case "^":
      output = calc.prevVal ** calc.currentVal;
      break;
    case "%":
      output = calc.prevVal * 0.01;
      break;
  }
  return output;
};
console.log(calculate());

//HTML ACCESS

const calcDisplayUpper = document.querySelector(".disp_1");
const calcDisplayLower = document.querySelector(".disp_2");
const numberButtons = document.querySelectorAll(".number");
const operandButtons = document.querySelectorAll(".operand");
const clearAll = document.querySelector(".clear-all");
const clearLast = document.querySelector("clear-last");

numberButtons.forEach((number) => {
  number.addEventListener("click", (event) => {
    // if (calc.isNextVal === false) {
    calcDisplayLower.innerHTML += event.target.innerHTML;
    calc.currentVal = parseFloat(calcDisplayLower.innerHTML);
    console.log("sanity check");
    if (calc.isNextVal) {
      calcDisplayUpper.innerHTML += event.target.innerHTML;
      console.log("is Next val");
      calcDisplayLower.innerHTML = calculate();
      calc.prevVal = calculate();
    }
  });
});

operandButtons.forEach((op) => {
  op.addEventListener("click", (event) => {
    calc.prevVal = calc.currentVal;
    calc.operand = event.target.innerHTML;
    calcDisplayUpper.innerHTML += calc.operand;
    calcDisplayLower.innerHTML = "";
    calc.currentVal = 0;
    calc.isNextVal = true;
  });
});

clearAll.addEventListener("click", (event) => {
  calc.prevVal = 0;
  calc.currentVal = 0;
  calc.isNextVal = false;
  calcDisplayLower.innerHTML = "";
  calcDisplayUpper.innerHTML = "";
});
