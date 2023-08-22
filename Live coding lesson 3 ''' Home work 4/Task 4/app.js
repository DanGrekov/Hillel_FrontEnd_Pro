//Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

let myNumber = parseInt(prompt(`Number: `))

alert(myNumber % 2 === 0 ? `This number is even` : `This number is not even`);

let lastNumber = myNumber % 10;
alert(`${lastNumber} is last number in ${myNumber}`);