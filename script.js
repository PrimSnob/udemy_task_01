'use strict';

let money, time;

function start() {
    money = +prompt("ваш бюджет на месяц?");
    time = prompt("введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpences: function() {
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
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let optExp = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = optExp;
        }
        console.log(appData);    
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день: " + appData.moneyPerDay);    
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            alert("Низкий дневной доход");
        } else if (appData.moneyPerDay < 2000) {
            alert("Средний дневной доход");
        } else {
            alert("Высокий дневной доход");
        }
    },
    checkSavings: function() {
        if (appData.saving) {
            let save = +prompt("Какова сумма накоплений?");
            let percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items;
        while (!isNaN(items) || items == "" || items == null) {
            items = prompt("Что принесёт дополнительный доход? (перечисли через зпт)?");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может ещё что-то,"));
        appData.income.sort();

        let message = "Способы доп. заработка:\n";
        appData.income.forEach(function(value, index, mass) {
            let num = index + 1;
            message += num + ": " + value +"\n"; 
        });
        alert(message);
    },
    logAppData: function() {
        console.log("Наша программа включает в себя данные: \n");
        for (let item in appData) {
            console.log(item + ": " + appData[item]);
        }
    }
};