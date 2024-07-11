#! /usr/bin/env node
// welcome message
console.log(chalk.cyanBright.bold(`\n\n<===========================================CURRENCY CONVERTER=======================================>\n<====================================================================================================>\n\n`));
// import inquirer package to my file
import inquirer from "inquirer";
import chalk from "chalk";
const currency_rate = {
    USD: 1, //Base currency    
    EUR: 0.92, //European currency(Euro)
    GBP: 0.78,
    INR: 83.50,
    PKR: 280, //Pakistani Rupees
    JPY: 161.41, //Japenies currency(Yen)
    CAD: 1.3, //Canadian dollar
    AUD: 1.48, //Australian dollar
};
let condition = true;
// Use condition
while (condition) {
    // Prompt to take the user input
    let user_answer = await inquirer.prompt([
        {
            name: "from_currency",
            message: chalk.cyanBright("Select the currency to convert from:"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "JYP", "CAD", "AUD"],
        },
        {
            name: "to_currency",
            message: chalk.cyan("Select the currency to convert into:"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "JYP", "CAD", "AUD"],
        },
        {
            name: "amount",
            type: "number",
            message: chalk.cyan("Enter your amount:"),
        },
    ]);
    // Perform currency conversion by using formula
    let fromAmount = currency_rate[user_answer.from_currency];
    let toAmount = currency_rate[user_answer.to_currency];
    let amount = user_answer.amount;
    // Formula of conversion
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    // Prints the converted amount
    console.log(chalk.cyan(`Your Converted Amount = ${chalk.cyanBright.bold(convertedAmount.toFixed(2))}`));
    const useranswer2 = await inquirer.prompt({
        name: "againPerformConversion",
        type: "confirm",
        message: chalk.cyan("Would You Like to Perform Again Conversion?"),
        default: "false",
    });
    condition = useranswer2.againPerformConversion;
}
//End message
console.log(chalk.cyanBright.bold("\n\n<===============================================THE END==============================================>\n<====================================================================================================>\n\n"));
