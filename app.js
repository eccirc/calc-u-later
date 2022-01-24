//CALCULATOR APP

/*
PSEUDO-CODE


If a number button is pressed
- take numerical input (from a button) from user
- if multiple number buttons pressed, concat these (e.g '1', '2' becomes 12)
- store the above in a variable AS A NUMBER (maye this variable is default  0)

If an operand button is pressed
- if an operand button is pressed check which one it is and find the corresponding function
- if operand number is pressed, push the stored number input to an array
- button should only register if it is pressed once, othrwise it waits for another number input
- if the operand is equals "=", perform the operation as pecified above - if no number input then default to zero

EQUALS OPERAND

- do all of the operations according to BODMAS, then clear the numbers array

DOM ELEMENTS

Number buttons - button with an inner HTML of the corresponding number and a class of "number"

Operand buttons - button with an inner HTML of the operand and a class of "operand" (again this could also be an array)

VARIABLES

numberInput - place to store the number input (this could be an array for multiple number inputs?)

operandInput - place to store the operand input

FUNCTIONS

operandFunction - perform an operation on two or more numbers corresponding to the stored number/s and operand



*/
