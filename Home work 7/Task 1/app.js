//Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)

let end = 30;
let start = 20;

for(let i = start; i <= end; i += 0,5){

    if(i < end){
        document.write(`${i}, `);
    }
    else{document.write(`${i}`);}
    
}