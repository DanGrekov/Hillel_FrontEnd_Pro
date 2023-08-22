//Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let end = 100;
let start = 1;
let variable = parseInt(prompt())
for(let i = start; i <= end; i++){
    if(variable < end){
        variable = i**2;
        console.log(variable)
    }
    else{break}
}


