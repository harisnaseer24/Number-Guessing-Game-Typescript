import inquirer from "inquirer";
let choice = await inquirer.prompt([
    {
        message: "Do you Want to play a number guessing game?",
        type: "list",
        name: "choice",
        choices: ["Yaayy", "Naayy"],
    },
]);
let guess = async () => {
    let number = Math.ceil(Math.random() * 100 + 1);
    console.log("Let`s Play..!");
    let answer = await inquirer.prompt([
        {
            message: "Guess the number, It's between 1 & 100 ",
            type: "number",
            name: "GuessedNumber",
        },
    ]);
    if (answer.GuessedNumber == number) {
        console.log("Congratulations, You Won..!");
    }
    else {
        console.log("Sorry, You Lost..!");
    }
    const wantMoreOrNot = await inquirer.prompt({
        message: "Do you want to play again ?",
        name: "want",
        type: "list",
        choices: ["Sure", "Nope"]
    });
    if (wantMoreOrNot.want == "Sure") {
        guess();
    }
};
if (choice.choice == "Yaayy") {
    guess();
}
else {
    console.log("Thanks for using this program");
}
