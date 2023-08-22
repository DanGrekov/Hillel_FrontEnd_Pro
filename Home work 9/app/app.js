//Дано масив об’єктів. Вивести масив телефонних номерів користувачів в яких баланс більше ніж 2000 доларів. 
//І знайти суму всіх балансів користувачів

let usersPhone = []
let usersAllBalance = 0;
for(let i = 0; i < users.length; i++){
    usersAllBalance += users[i].balance;

    if(users[i].balance > 2000){
        usersPhone.push(users[i].phone)

    }
}
console.log("Numbers of users whose balance is more than 2000$:", usersPhone);
console.log(`Total balance of all users: ${usersAllBalance.toFixed(2)}`);









