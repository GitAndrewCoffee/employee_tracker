//
// Global Variables & Constants
//

//NPM Packages

const inquirer = require('inquirer');
const mysql = require('mysql2');
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
    
    console.log('mainPrompt() is running')

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

    }).then( input => {
        console.log(`input is ${input.option}`);
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

function displayEmployees(nextStep) {
    var queryMe = 'SELECT * FROM employees;'

    db.query(queryMe, (err, res) =>{
        if (err) {
            console.log('there was an error loading employees')
            throw err;
        }
        console.table(res);
        if (nextStep = 'main') {
            mainPrompt();
        } else {
            return "display employees is complete";
        }
        
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
            console.log(`New Department ${newName} has been saved`)
            mainPrompt();
        });
    });    
}


function addRole() {

    inquirer.prompt(prompts.rolePrompts)
    .then(newRole => {
                
        db.query('INSERT INTO role (title, salary, department_id) VALUES (?)',newRole, (err, res) =>{
            if (err) {
                console.log('there was an error saving the new role')
                throw err;
            }
            console.log(`New Role ${newRole.title} has been saved`)
            mainPrompt();
        });
    });    
}
function addEmployee() {

    inquirer.prompt(prompts.employeePrompts)
    .then(newValue => {       
        
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)',newValue, (err, res) =>{
            if (err) {
                console.log('there was an error saving the new employee')
                throw err;
            }
            console.log(`New Employee ${newValue} has been saved`)
            mainPrompt();
        });
    });    
}

function updateEmployee() {

    displayEmployees('none');
        
    inquirer.prompt(prompts.updateEmpPrompts)
    .then(newValue => {       
        
        checkedID = newValue.id * 10;
        checkedID = checkedID / 10;

        queryTxt = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?) WHERE id = ${checkedID}`;

        db.query(queryTxt, [newValue.first_name, newValue.last_name, newValue.role_id, newValue.manager_id], (err, res) =>{
            if (err) {
                console.log('there was an error saving the new employee')
                throw err;
            }
            console.log(`New Employee ${checkedID} has been saved`)
            mainPrompt();
        });
    });    
}

//
// Application Start Up
//

mainPrompt();