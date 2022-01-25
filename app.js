//Create a calculator object to hold all relevant calulator based things

const calc = {
  inputs: [1, 2],
  operand: "+",
  displayValue: "",
  calculate: null,
};

const arr = [1, 2];

const operand = "+";

const calculate = (inputArr) => {
  return inputArr.reduce((prev, next) => {
    return operand === "+" ? prev + next : 0;
  });
};

const calcu = arr.reduce((prev, next) => {
  return operand === "+" ? prev + next : operand === "-" ? prev - next : 0;
});

console.log(calculate(arr));
