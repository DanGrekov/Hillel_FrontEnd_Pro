//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.


let variable = parseInt(prompt(`What your number???`))
let start = 1;
let end = variable;

for(let i = start; i <= end; i++){
   
    if(variable % i === 0){
        if(i === end){
            document.write(`${i}`)
        }
        else{
            document.write(`${i}, `)
        }
    }    

}

