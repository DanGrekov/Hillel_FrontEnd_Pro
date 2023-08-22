//Дано тризначне число.
//1) Чи правда, що всі цифри однакові?
//2) Чи є серед цифр цифри однакові?
let myNumber = parseInt(prompt(`Enter number: `));
if (myNumber > 999){
    parseInt(prompt(`Enter number more correct: `));
}

let firstPart =  ~~(myNumber/100);
console.log(firstPart);
let secondPart =  Math.floor((myNumber % 100) / 10);
console.log(secondPart);
let thirdPart = Math.floor(myNumber % 10);
console.log(thirdPart);

//1) Чи правда, що всі цифри однакові?
if(firstPart == secondPart == thirdPart){
   alert(`First condition true`);
}
else{alert(`First condition false`);}

//2) Чи є серед цифр цифри однакові?
if(firstPart == secondPart || secondPart == thirdPart || thirdPart == firstPart){
    alert(`Second condition true`);
}
else{alert(`Second condition true`);}