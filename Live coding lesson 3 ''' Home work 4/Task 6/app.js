//Дано тризначне число.
//1)Визначити чи є парною сума його цифр.
//2)Визначити, чи кратна сума цифр п'яти.
//3)Визначити чи є добуток його цифр більше 100.

let myNumber = parseInt(prompt(`Enter number: `));
if (myNumber > 999){
    parseInt(prompt(`Enter number more correct: `));
}

let firstPart =  ~~(myNumber/100);
console.log(firstPart);

let secondPart =  Math.floor((myNumber / 10) % 10);
console.log(secondPart);

let thirdPart = Math.floor(myNumber % 10);
console.log(thirdPart);

//1)Визначити чи є парною сума його цифр.
if((firstPart + secondPart + thirdPart) % 2 != 0) {
    alert(`First condition false`);
}
else{alert(`First condition true`);}

//2)Визначити, чи кратна сума цифр п'яти.
if((firstPart + secondPart + thirdPart) % 5) {
    alert(`Second condition false`);
}
else{alert(`Second condition true`);}

//3)Визначити чи є добуток його цифр більше 100.
if((firstPart * secondPart * thirdPart) < 100) {
    alert(`Third condition false`);
}
else{alert(`Third condition true`);}