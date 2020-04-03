'use strict';

let money = +prompt("ваш бюджет на месяц?");
let time = prompt("введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let i = 0; i < 2; i++) {
    let key = prompt("Введите обязательную статью расходов в этом месяце");
    let value = prompt("Во сколько обойдется?");

    if (typeof(key) === "string" && typeof(key) != null && typeof(value) != null && key != "" && value != "") {
        appData.expenses[key] = +value;
    } else {
        console.log("wrong data");
        i--;
    }
}

// let i = 0;
// do {
//     let key = prompt("Введите обязательную статью расходов в этом месяце");
//     let value = prompt("Во сколько обойдется?");

//     if (typeof(key) === "string" && typeof(key) != null && typeof(value) != null && key != "" && value != "") {
//         appData.expenses[key] = +value;
//         i++;
//     } else {
//         console.log("wrong data");
//     }
// } while (i < 2);

// let i = 0;
// while (i < 2) {
//     let key = prompt("Введите обязательную статью расходов в этом месяце");
//     let value = prompt("Во сколько обойдется?");

//     if (typeof (key) === "string" && typeof (key) != null && typeof (value) != null && key != "" && value != "") {
//         appData.expenses[key] = +value;
//         i++;
//     } else {
//         console.log("wrong data");
//     }
// }

appData.moneyPerDay = appData.budget / 30;

console.log(appData);

alert("Бюджет на 1 день: " + appData.moneyPerDay);