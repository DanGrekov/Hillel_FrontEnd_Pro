//Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. 
//Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.

let arr = [];
let start = 0;
let end = parseInt(prompt('Длина?'));
let arrInclude;
for(i = start; i < end; i++){
    arrInclude = parseInt(prompt('Длина?'));
    arr.unshift(arrInclude)
    console.log(arr);
}

console.log(`Наш массив: ${arr}` );

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
arr.sort(compareNumeric);
console.log(`Наш отсортированный массив: ${arr}`);

arr.splice(1,4);
console.log(`Наш отсортированный массив без удаленных элементов: ${arr}`);