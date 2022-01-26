//Create a calculator object to hold all relevant calulator based things

const calc = {
  prevVal: 0,
  currentVal: 0,
  isNextVal: false,
  operand: "+",
  displayValue: "",
  result: 0,
  calculate: null,
};

//CALCULATOR LOGIC SANDBOX
//const operand = "+";

const calculate = (operand, prevVal, currentVal) => {
  output = 0;
  switch (operand) {
    case "+":
      output = prevVal + currentVal;
      break;
    case "-":
      output = prevVal - currentVal;
      break;
    case "*":
      output = prevVal * currentVal;
      break;
    case "/":
      output = prevVal / currentVal;
      break;
    case "^":
      output = prevVal ** currentVal;
      break;
    case "%":
      output = prevVal * 0.01;
      break;
  }
  return output;
};
console.log(calculate());

//HTML ACCESS

const calcDisplayUpper = document.querySelector(".disp_1");
const calcDisplayLower = document.querySelector(".disp_2");
const calcDisplayEquals = document.querySelector(".disp_3");
const numberButtons = document.querySelectorAll(".number");
const operandButtons = document.querySelectorAll(".operand");
const clearAll = document.querySelector(".clear-all");
const clearLast = document.querySelector("clear-last");
const equalsButton = document.getElementById("equals");

const updateVal = () => {
  calcDisplayUpper.innerHTML = calc.displayValue;
};

//Number button event listeners - if statement works to create a running total when new numbers are entered
numberButtons.forEach((number) => {
  number.addEventListener("click", (event) => {
    calcDisplayEquals.innerHTML = "";
    calc.displayValue += event.target.innerHTML;
    calcDisplayLower.innerHTML += event.target.innerHTML;
    calc.currentVal = parseFloat(calcDisplayLower.innerHTML);
    if (calc.isNextVal) {
      // calcDisplayUpper.innerHTML += event.target.innerHTML;
      calc.result = calculate(calc.operand, calc.prevVal, calc.currentVal);
      calcDisplayLower.innerHTML = calc.result;
      calc.currentVal = calc.result;
    }
    updateVal();
  });
});
//Operand buttons - currentValue is assigned to prevValue to create a running total
operandButtons.forEach((op) => {
  op.addEventListener("click", (event) => {
    calc.displayValue += event.target.innerHTML;
    calc.prevVal = calc.currentVal;
    calc.operand = event.target.innerHTML;
    // calcDisplayUpper.innerHTML = calcDisplayLower.innerHTML += calc.operand;
    calcDisplayLower.innerHTML = "";
    calc.currentVal = 0;
    calc.isNextVal = true;
    updateVal();
  });
});

//Clear everything and rest calculations to start afresh by resetting isNextVal to false
clearAll.addEventListener("click", (event) => {
  calc.prevVal = 0;
  calc.currentVal = 0;
  calc.displayValue = "";
  calc.isNextVal = false;
  calcDisplayLower.innerHTML = "";
  calcDisplayUpper.innerHTML = "";
  calcDisplayEquals.innerHTML = "";
});

//Run/Display the calculation, and then reset all values
equalsButton.addEventListener("click", (event) => {
  calcDisplayEquals.innerHTML = calcDisplayLower.innerHTML;
  calcDisplayLower.innerHTML = "";
  calc.prevVal = 0;
  calc.currentVal = 0;
  calc.displayValue = "";
  calc.isNextVal = false;
  updateVal();
});
