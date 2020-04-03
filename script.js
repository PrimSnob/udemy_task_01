'use strict';

let money = prompt("ваш бюджет на месяц?");
let time = prompt("введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};


let expensesKey = prompt("Введите обязательную статью расходов в этом месяце");
console.log(expensesKey);

let expensesValue = prompt("Во сколько обойдется?");
console.log(expensesValue);

appData.expenses[expensesKey] = +expensesValue;

console.log(appData.expenses);

alert("Бюджет на 1 день: " + appData.expenses[expensesKey]/30);