import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import Employee from "./lib/Employee.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import Manager from "./lib/Manager.js";
let cardParentEl;
// cardParentEl = document.getElementById("employees");

chalkAnimation.rainbow("Welcome to the Employee Tracker!");

setTimeout(() => {
  console.log(
    chalk.bold(
      `Let's get started! Press any letter key to start building your team profile.`
    )
  );
}, 2000);

let managerArray = [];
let engineerArray = [];
let internArray = [];

function welcome() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "companyName",
        message: `What is your company's name?`,
      },
    ])
    .then((answers) => {
      // if there's an answer, run generate HTML with the answer inside.
      generateHTML(answers);
      // also if answers, run the function addEmployee.
      if (answers) {
        addEmployee();
      }
    });
}

welcome();

function generateHTML(answers) {
  fs.appendFile(
    "./dist/index.html",
    `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./reset.css" />
            <link rel="stylesheet" href="./styles.css" />
            <title>Team Profile Generator</title>
          </head>
          <body>
            <header>${answers.companyName}</header>
        
            <section id="employees"></section>
            <script src='../index.js'>
          </body>
        </html>
        `,
    (err) => (err ? console.error(err) : null)
  );
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: `Would you like to add a team member?`,
        choices: [
          "Yes, a Manager.",
          "Yes, an Engineer.",
          "Yes, an Intern.",
          `No, I'm done.`,
        ],
      },
    ])
    .then((answers) => {
      if (answers.addEmployee === "Yes, a Manager.") {
        addManager();
      } else if (answers.addEmployee === "Yes, an Engineer.") {
        addEngineer();
      } else if (answers.addEmployee === "Yes, an Intern.") {
        addIntern();
      } else {
        return;
      }
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the manager's name?`,
      },
      {
        type: "input",
        name: "managerEmail",
        message: `What is the manager's email address?`,
      },
      {
        type: "input",
        name: "employeeId",
        message: `What is the manager's employee ID?`,
      },
      {
        type: "input",
        name: "officeNumber",
        message: `What is the manager's office number?`,
      },
    ])
    .then((answers) => {
      if (answers) {
        addEmployee();
      }
      const manager = new Employee(
        answers.name,
        answers.employeeId,
        answers.managerEmail
      );
      // manager.push(managerArray);
      console.log(managerArray);
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the engineer's name?`,
      },
      {
        type: "input",
        name: "engineerEmail",
        message: `What is the engineer's email address?`,
      },
      {
        type: "input",
        name: "engineerId",
        message: `What is the engineer's employee ID?`,
      },
      {
        type: "input",
        name: "github",
        message: `What is the engineer's Github username?`,
      },
    ])
    .then((answers) => {
      if (answers) {
        addEmployee();
      }
      const engineer = new Employee(
        answers.name,
        answers.engineerId,
        answers.engineerEmail,
        answers.github
      );
      // engineer.push(engineerArray);
      console.log(engineerArray);
    });

  addEmployee();
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the intern's name?`,
      },
      {
        type: "input",
        name: "internId",
        message: `What is the intern's employee ID number?`,
      },
      {
        type: "input",
        name: "internEmail",
        message: `What is the intern's email address?`,
      },
      {
        type: "input",
        name: "internSchool",
        message: `What school does the intern attend?`,
      },
    ])
    .then((answers) => {
      if (answers) {
        addEmployee();
      }
      const intern = new Employee(
        answers.name,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      // intern.push(internArray);
      console.log(internArray);
    });

  addEmployee();
}

/* 
Once done with each function, add the card to the HTML.
push multiple employees into arrays according to roles, then loop over the array to generate an HTML card per employee.
*/
