//Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

let myNumber = parseInt(prompt(`Enter number: `));
if (myNumber > 99){
    parseInt(promt(`Enter number more correct: `));
}

let firstPart =  ~~(myNumber/10);

let secondPart = myNumber % 10;

if (firstPart > secondPart){
    alert(`${firstPart} > ${secondPart}`);

}
else if (firstPart < secondPart){
    alert(`${firstPart} < ${secondPart}`);
}

else{
    alert(`They are equal`);
}

