//Вивести квадрати чисел від 10 до 20
let end = 20;
let start = 10;

for(let i = start; i <= end; i++){
    if(i < end){
        document.write(`${i * i}, `);
    }
    else{document.write(`${i * i}`);}
}