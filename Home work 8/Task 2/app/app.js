/*
Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
Знайти суму та кількість позитивних елементів.
Знайти мінімальний елемент масиву та його порядковий номер.
Знайти максимальний елемент масиву та його порядковий номер.
Визначити кількість негативних елементів.
Знайти кількість непарних позитивних елементів.
Визначити кількість парних позитивних елементів.
Знайти суму парних позитивних елементів.
Знайти суму непарних позитивних елементів.
Знайти добуток позитивних елементів.
Знайти найбільший серед елементів масиву, решту занулити.
*/

//Знайти суму та кількість позитивних елементів.
for(let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        resultTask1 += arr[i]; 
    }   
}
console.log(`Result task 1: ${resultTask1}`);

//Знайти мінімальний елемент масиву та його порядковий номер.
resultTask2 = Math.min.apply(null, arr);
console.log(`Result task 2: ${resultTask2}, index: ${arr.indexOf(resultTask2)}`);

//Знайти максимальний елемент масиву та його порядковий номер.
resultTask3 = Math.max.apply(null, arr);
console.log(`Result task 3: ${resultTask3}, index: ${arr.indexOf(resultTask3)}`);

//Визначити кількість негативних елементів.
for(let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
        resultTask4 += 1; 
    }   
}
console.log(`Result task 4: ${resultTask4}`);

//Знайти кількість непарних позитивних елементів.
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0 && arr[i] > 0){
        resultTask5 += 1; 
    }   
}
console.log(`Result task 5: ${resultTask5}`);

//Визначити кількість парних позитивних елементів.
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0 && arr[i] > 0){
        resultTask5 += 1; 
    }   
}
console.log(`Result task 5: ${resultTask5}`);

//Знайти суму парних позитивних елементів.
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0 && arr[i] > 0){
        resultTask6 += arr[i]; 
    }   
}
console.log(`Result task 6: ${resultTask6}`);

//Знайти суму непарних позитивних елементів.
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0 && arr[i] > 0){
        resultTask7 += arr[i]; 
    }   
}
console.log(`Result task 7: ${resultTask7}`);


//Знайти добуток позитивних елементів.
for(let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        resultTask8 = resultTask8 * arr[i]; 
    }   
}
console.log(`Result task 8: ${resultTask8}`);

//Знайти найбільший серед елементів масиву, решту занулити.
for(let i = 0; i < arr.length; i++){
    if(arr[i] != Math.max.apply(null, arr)){
        arr[i] = 0;
    }  
}
console.log(`Result task 9: ${arr}`);