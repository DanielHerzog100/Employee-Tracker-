const inquirer = require("inquirer");
require("console.table");
const connection = require("./connect.js");

async function mainMenu() {
  const { action } = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
      "Finish",
    ],
  });
  switch (action) {
    case "view all departments":
      viewDepartments();
      break;
    case "view all roles":
      //   viewRoles();
      break;
    case "view all employees":
      //   viewEmployees();
      break;
    case "add a department":
      addDepartment();
      break;
    case "add a role":
      //   addRole();
      break;
    case "add an employee":
      //   addEmployee();
      break;
    case "update an employee role":
      //   updateRole();
      break;
    case "Finish":
      break;
  }
}
function viewDepartments() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) return console.error(err);
    console.table(res);
    mainMenu();
  });
}

async function addDepartment() {
  const { name } = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "What is the name of the new department?",
  });
  connection.query("INSERT INTO department SET ?",
  {name:name},
  (err,res) => {
    if (err) return console.error(err)    
    mainMenu()g 
  })
}

mainMenu();
