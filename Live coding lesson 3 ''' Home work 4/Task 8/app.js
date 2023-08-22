//Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

let variableOne = parseInt(prompt(`Enter first number: `));
if (100000 >= variableOne > 999999 ){
    parseInt(prompt(`Enter number more correct: `));
}

let variableTwo = parseInt(prompt(`Enter second number: `));
if (variableTwo > 999999){
    parseInt(prompt(`Enter number more correct: `));
}


let firstPartOne =  ~~(variableOne/100000);
console.log(firstPartOne);
let secondPartOne = Math.floor((variableOne / 10000) % 10);
console.log(secondPartOne);
let thirdPartOne = Math.floor((variableOne / 1000) % 10);
console.log(thirdPartOne);
let fourthPartOne = Math.floor((variableOne / 100) % 10);
console.log(fourthPartOne);
let fifthPartOne = Math.floor((variableOne / 10) % 10);
console.log(fifthPartOne);
let sixthPartOne = variableOne % 10;
console.log(sixthPartOne );


let sixthPartTwo = ~~(variableTwo/100000);
console.log(sixthPartTwo);

let fifthPartTwo = Math.floor((variableTwo / 10000) % 10);
console.log(fifthPartTwo);
let fourthPartTwo = Math.floor((variableTwo / 1000) % 10);
console.log(fourthPartTwo);
let thirdPartTwo = Math.floor((variableTwo / 100) % 10);
console.log(thirdPartTwo);
let secondPartTwo = Math.floor((variableTwo / 10) % 10);
console.log(secondPartTwo);
let firstPartTwo = variableTwo % 10;
console.log(firstPartTwo);

if(firstPartOne == firstPartTwo && secondPartOne == secondPartTwo && 
    thirdPartOne == thirdPartTwo && fourthPartOne == fourthPartTwo && 
    fifthPartOne == fifthPartTwo && sixthPartOne == sixthPartTwo ){
        alert('True')
    }
    else{alert('False')}

