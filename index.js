import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import {
  generateTitle,
  generateManager,
  generateEngineer,
  generateIntern,
  generateHTML,
} from "./src/build.js";

chalkAnimation.rainbow("Welcome to the Employee Tracker!");

setTimeout(() => {
  console.log(
    chalk.bold(
      `Let's get started! Press any letter key to start building your team profile.`
    )
  );
}, 2000);

function start() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "companyName",
        message: `What is your company's name?`,
      },
    ])
    .then((answers) => {
      generateTitle(answers);
      if (answers) {
        addEmployee();
      }
    });
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
        generateHTML();
        console.log("Generating your HTML File!");
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
      generateManager(answers);
      addEmployee();
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
      generateEngineer(answers);
      addEmployee();
    });
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
      generateIntern(answers);
      addEmployee();
    });
}

start();
