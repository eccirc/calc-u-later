//Create a calculator object to hold all relevant calulator based things

const calc = {
  prevVal: 2,
  currentVal: 4,
  isNextVal: false,
  operand: "*",
  displayValue: "",
  calculate: null,
};

//CALCULATOR LOGIC SANDBOX
const operand = "+";

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
const clearLast = document.querySelector("cleae-last");

numberButtons.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (!calc.isNextVal) {
      calc.displayValue += event.target.innerHTML;
      calcDisplayLower.innerHTML = calc.displayValue;
      calc.prevVal = parseFloat(calcDisplayLower.innerHTML);
    } else {
      calcDisplayUpper.innerHTML += event.target.innerHTML;
      calc.currentVal = parseFloat(calcDisplayUpper);
    }
  });
});

operandButtons.forEach((op) => {
  op.addEventListener("click", (event) => {
    calc.operand = event.target.innerHTML;
    calcDisplayLower.innerHTML += event.target.innerHTML;
    !calc.isNextVal;
  });
});
