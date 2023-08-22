//Вивести всі числа в діапазоні від 100 до 200, які кратні 3

let start = 100;
let end = 200;

for(let i = start; i <= end; i++){
   
    if(i % 3 === 0){
        console.log(i);
    }   
}