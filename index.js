const fs = require('fs');
const inquirer = require ('inquirer');
const generatePage = require('./src/generatePage');
const { writeFile } = require('node:fs/promises');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

let team =[];

const init = () => {
    inquirer
      .prompt({
        type: "list",
        name: "employee",
        message: "Which employee would you like to add to the team?",
        choices: ["Manager", "Engineer", "Intern", "None"],
      })
      .then(function (answer) {
        switch (answer.employee) {
          case "Manager":
            generateManager();
            break;
          case "Engineer":
            generateEngineer();
            break;
          case "Intern":
            generateIntern();
            break;
          default:
            break;
        }
      });
};

const generateManager = async () => {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the name of the Manager:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the id of the Manager:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the email of the Manager:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the office number of the Manager:",
      },
    ]);
    const { name, id, email, officeNumber } = answers;

    const addManager = new Manager(name, id, email, officeNumber);

    team.push(addManager);
  
    addAgain();
};

const generateEngineer = async () => {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the name of the Engineer:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the id of the Engineer:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the email of the Engineer:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the github:",
      },
    ]);
    const { name, id, email, github } = answers;

    const addEngineer = new Engineer(name, id, email, github);

    team.push(addEngineer);

    addAgain();
};

const generateIntern = async () => {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the name of the Intern:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the id of the Intern:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the email of the Intern:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the school:",
      },
    ]);
    const { name, id, email, school } = answers;

    const addIntern = new Intern(name, id, email, school);

    team.push(addIntern);

    addAgain();
  };

addAgain = async () => {
    let answer = await inquirer.prompt({
      type: "confirm",
      name: "confirmAdding",
      message: "Do you want to add another employee?",
      default: false,
    });
    if (answer.confirmAdding) {
      init();
    } else {
        fs.writeFile('./dist/index.html', generatePage(team), err => {
            if (err) {
                throw Error(err);
            }
        });
      //console.log(team);
    }
  };

init();