import inquirer from "inquirer";
async function AskQuestion() {
    const answer = await inquirer.prompt([{
            type: "list",
            name: "Question1",
            choices: ["TypeScript", "Google", "Microsoft", "Amazon"],
            message: "Which of the following companies has developed Typescript?"
        },
        {
            type: "list",
            name: "Question2",
            choices: ["Gradual", "Duck", "Dynamic", "All of the above"],
            message: "Which is the typing principle of Typescript?"
        },
        {
            type: "list",
            name: "Question3",
            choices: [".tt", "tsx", ".nod", ".ts"],
            message: "Which of the following fileName of the extention of Typescript?"
        },
        {
            type: "list",
            name: "Question4",
            choices: ["Python", "C++", "JavaScript", ".All of the above"],
            message: "Which of the Computer programing Language below has influenced the creation of Typescript?"
        },
    ]);
    const marks = 4;
    const fail = 0;
    if (answer.Question1 === "Microsoft") {
        console.log("Answer is Correct");
    }
    else
        () => {
            console.log("Answer is not Correct");
        };
    if (answer.Question2 === "Dynamic") {
        console.log("Answer is Correct");
    }
    else
        () => {
            console.log("Answer is not Correct");
        };
    if (answer.Question2 === ".ts") {
        console.log("Answer is Correct");
    }
    else
        () => {
            console.log("Answer is not Correct");
        };
    if (answer.Question2 === "JavaScript") {
        console.log("Answer is Correct");
    }
    else
        () => {
            console.log("Answer is not Correct");
        };
}
AskQuestion();
