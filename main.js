#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright.bold("\n \t Welcome to code-With 'Umm e Habiba' - Currency Converter\n"));
//define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1, // Base Currency
    "EUR": 0.9, //Eourpean Currency(Euro)
    "JYP": 113, //Japenese Currency
    "CAD": 1.3, //Canadian Dollar
    "AUD": 1.65, // Australian Dollar
    "PKR": 277.70, //Pakistan Rupees
    //Add more currencies and their exchange rates here
};
//prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.magenta.bold("Select the Currency to Convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.magenta.bold("Select the Currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.magenta.bold("Enter the amount to convert:")
    }
]);
//perform currency conversion by using formula
let form_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / form_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(chalk.magenta.bold `Converted Amount = ${chalk.greenBright(converted_amount.toFixed(3))}`);
