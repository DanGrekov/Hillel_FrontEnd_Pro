//Дано два різні числа. Визначити, яке з них більше, а яке менше.
let firstVariable = parseInt(prompt(`Enter your first Variable`));
let secondVariable = parseInt(prompt(`Enter your second Variable`));

if (firstVariable > secondVariable){
    console.log(`First variable is bigger`)
    alert(`First variable is bigger`)
}
else if (firstVariable < secondVariable){
    console.log(`Second variable is bigger`)
    alert(`Second variable is bigger`)
}
else{
    console.log(`They are equal`)
    alert(`They are equal`)
}