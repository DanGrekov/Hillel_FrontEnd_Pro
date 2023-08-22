//task 1
/*
let userName = prompt(`What your name?`)
alert(`Hello, ${userName}! How are you?`);
console.log(userName);
*/


//task 2
/*
let firsVariable = parseInt(prompt(`Enter the first variable`));
let secondVariable = parseInt(prompt(`Enter the second variable`));
let addition = firsVariable + secondVariable;
let subtraction = firsVariable - secondVariable;
let multiplication = firsVariable * secondVariable;
let division = firsVariable / secondVariable;
alert(`Results: 
Addition = ${addition}, 
Subtraction = ${subtraction}, 
Multiplication = ${multiplication}, 
Division = ${division},`);
*/


//task 3
/*
let firsVariable = parseInt(prompt(`Enter the first variable`));
let secondVariable = parseInt(prompt(`Enter the second variable`));
if (firsVariable === secondVariable){
    alert(`true`)
} 
else{
    alert(`false`)
}
*/


//task 4
/*
let firsVariable = parseInt(prompt(`Enter the first variable`));
let secondVariable = parseInt(prompt(`Enter the second variable`));
let thirdVariable = parseInt(prompt(`Enter the third variable`));
let arithmeticMean = (firsVariable + secondVariable + thirdVariable)/3;
alert(`Arithmetic mean: ${arithmeticMean}`);
*/


//task 5
let variable = parseInt(prompt(`Enter the variable`));

let firstPart =  ~~(variable/10000);
console.log(firstPart);

let secondPart =  Math.floor((variable / 1000) % 10);
console.log(secondPart);

let thirdPart = Math.floor((variable / 100) % 10);
console.log(thirdPart);

let fourthPart = Math.floor((variable / 10) % 10);
console.log(fourthPart);

let fifthPart = variable % 10;
console.log(fifthPart);

alert(`Result: ${firstPart} ${secondPart} ${thirdPart} ${fourthPart} ${fifthPart}`)