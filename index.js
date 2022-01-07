//
// Global Variables & Constants
//

//NPM Packages

const inquirer = require('inquirer');
const mysql = require('mysql12');
const cTable = require('console.table');

//
// Database Connection
//

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database.')
  );

//
// Prompts
//

function mainPrompt() {
    
    inquirer.prompt( {
        type: 'list',
        message: 'select an option:',
        name: 'option',
        choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update employee'
        ]

    }).then(selection => {


    })

    // Main Prompt
    //View All Departments
    //View all roles
    //View all employees
    //Add a department
    //Add a role
    //add an employee
    //Update an employee role
}


function displayDepartments() {

    var queryMe = 'SELECT * FROM department;'

    db.query(queryMe, (err, res) =>{
        if (err) {
            console.log('there was an error loading departments')
            throw err;
        }
        console.table(res);
        mainPrompt();
    });
};
    

function displayRoles() {
    var queryMe = 'SELECT * FROM role;'

    db.query(queryMe, (err, res) =>{
        if (err) {
            console.log('there was an error loading roles')
            throw err;
        }
        console.table(res);
        mainPrompt();
    });
};

function displayEmployees() {
    var queryMe = 'SELECT * FROM employees;'

    db.query(queryMe, (err, res) =>{
        if (err) {
            console.log('there was an error loading employees')
            throw err;
        }
        console.table(res);
        mainPrompt();
    });
};

//Add Department
    //Prompt for Department Info
    //Save to Database
    //Return to Prompt

//Add Role
    //Prompt for Role Info
    //Save to Database
    //Return to Prompt

//Add Employee
    //Prompt for Employee Info
    //Save to Database
    //Return to Prompt

//Update Employee
    //Prompt Employee Info
    //Save to Database
    //Return to Prompt

