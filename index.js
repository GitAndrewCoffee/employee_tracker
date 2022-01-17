//
// Global Variables & Constants
//

//NPM Packages

const inquirer = require('inquirer');
const mysql = require('mysql12');
const cTable = require('console.table');
const prompts = require('./js/questions');

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

    }).then( function(input) {

        switch (input.option) {
            case 'view all departments':
                displayDepartments();
                break;
            case "view all roles":
                displayRoles();
                break;
            case "view all employees":
                displayEmployees();
                break;
            case "add a department":
                addDepartment();
                break;
            case "add a role":
                addRole();
                break;
            case "add an employee":
                addEmployee();
                break;
            case "update employee":
                updateEmployee();
                break;
        }
    })
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

function addDepartment() {

    inquirer.prompt("What is the new Department's Name?")
    .then(newName => {
        db.query('INSERT INTO department (name) VALUES (?)',newName, (err, res) =>{
            if (err) {
                console.log('there was an error saving the new Department')
                throw err;
            }
            console.log(`New Daprtment ${newName} has been saved`)
            mainPrompt();
        });
    });    
}


function addRole() {

    inquirer.prompt("What is the new Role's Title?")
    .then(newName => {
        
        
        db.query('INSERT INTO department (name) VALUES (?)',newValue, (err, res) =>{
            if (err) {
                console.log('there was an error saving the new role')
                throw err;
            }
            console.log(`New Daprtment ${newValuw} has been saved`)
            mainPrompt();
        });
    });    
}

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

