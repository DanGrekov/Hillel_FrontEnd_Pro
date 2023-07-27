//Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

let killomiter = parseInt(prompt(`Enter your distance in km: `));
let foot = parseInt(prompt(`Enter your distance in foot: `));

killomiter = killomiter * 1000;
foot = foot * 0.305;

if (killomiter > foot){
    console.log(`foot less km`);
    alert(`foot less km`);
}

else if (killomiter < foot){
    console.log(`km less foot`);
    alert(`km less foot`);
}

else {
    console.log(`km equal foot`);
    alert(`km equal foot`);
}
