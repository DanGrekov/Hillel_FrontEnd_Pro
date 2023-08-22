//Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let start = 1;
let end = 500;
let variable = 0;

for(let i = start; i <= end; i++){
    variable = variable + 1;
    document.write(`${variable} `);
    
}
variable = variable / end;
document.write(`Result: ${(end + 1) / 2}`);
