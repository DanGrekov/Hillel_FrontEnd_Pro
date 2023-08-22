//Вивести таблицю множення на 7

let end = 9;
let start = 1;
let value;

for(let i = start; i <= end; i++){


    if(i < end){
        document.write(`${i} * 7 =  ${value = i * 7}, `);
    }

    else{
        value = start * 7;
        document.write(`${i} * 7 = ${value = i * 7}`);
    }
}


