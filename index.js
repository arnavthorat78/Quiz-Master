// Arnav Thorat, 2022
// This project is made/used under the MIT license (LICENSE).

import chalk from "chalk"
import inquirer from "inquirer";
import { createSpinner }

console.log(chalk.underline.bold("Quiz Master"));
console.log(chalk.grey("By Arnav Thorat"));

async function start() {
    const startType = await inquirer.prompt({
    name: "type",
    type: "list",
    message: "What would you like to do?\n",
    choices: [
        "Play an existing game",
        "Create a new game"
    ]
})

    return startType;
}

async function handleAnswer(answer) {
    const spinner = 
}
