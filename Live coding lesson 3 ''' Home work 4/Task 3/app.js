//Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

let a = parseInt(prompt(`Enter a`));
let b = parseInt(prompt(`Enter b`));

if(a % b === 0){
    console.log(`a / b without a trace`);
    alert(`a / b without a trace`);

}

else {
    console.log(`a / b with a trace`);
    alert(`a / b with a trace`);
}

if(b % a === 0){
    console.log(`b / a without a trace`);
    alert(`b / a without a trace`);
}

else {
    console.log(`b / a with a trace`);
    alert(`b / a with a trace`);
}
