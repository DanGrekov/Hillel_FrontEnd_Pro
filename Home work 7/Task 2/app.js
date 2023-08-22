//Oдин долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
let end = 100;
let start = 10;

for(let i = start; i <= end; i += 10){

    if(i < end){
        document.write(`${i * 40}, `);
    }
    else{document.write(`${i * 40}`);}
}