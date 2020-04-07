'use strict';

let money, time;

function start() {
    money = +prompt("ваш бюджет на месяц?");
    time = prompt("введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("ваш бюджет на месяц?");
    }
}

function chooseExpences() {
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
}

function checkSavings() {
    if (appData.saving) {
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert("Низкий дневной доход");
    } else if (appData.moneyPerDay < 2000) {
        alert("Средний дневной доход");
    } else {
        alert("Высокий дневной доход");
    }
}

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let optExp = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = optExp;
    }
    console.log(appData);
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
};

chooseExpences();
chooseOptExpenses();

detectDayBudget();

detectLevel();

checkSavings();
