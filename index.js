//
// Global Variables & Constants
//

//NPM Packages

const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const prompts = require('./js/questions');

//constants

const menuOptions = ['view all departments',
'view all roles',
'view all employees',
'add a department',
'add a role',
'add an employee',
'update employee',
'quit']


//
// Database Connection
//

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'rootroot',
      database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database.')
  );

//
// Prompts
//

function mainPrompt() {
    
    console.log('mainPrompt() is running');

    const mainMenu = {
        type: 'list',
        message: 'select an option:',
        name: 'option',
        choices: menuOptions
        };
        
    inquirer.prompt([mainMenu]).then(data => {
        console.log(`You chose ${data.option}`);    
        if (data.option == menuOptions[0]) {
                displayDepartments();
            } else if (data.option == menuOptions[1]) {
                displayRoles();
            } else if (data.option == menuOptions[2]) {
                displayEmployees();
            } else if (data.option == menuOptions[3]) {
                addDepartment();
            } else if (data.option == menuOptions[4]) {
                addRole();
            } else if (data.option == menuOptions[5]) {
                addEmployee();
            } else if (data.option == menuOptions[6]) {
                updateEmployee();
            } else if (data.option == menuOptions[7]) {
                process.exit();
            } else {
                console.log("Invalid Option");
                mainMenu();
            }
        }).catch(err => {
            console.log(err);
        });
};


function displayDepartments() {

    console.log('Display Department is running');

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
    var queryMe = 'SELECT * FROM employee;'

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

    const promptMe = {
        type: 'input',
        name: 'dep',
        message: 'What is the new department name?'    
    }

    inquirer.prompt(promptMe)
    .then(userInput => {
        db.query('INSERT INTO department (dep) VALUES (?)',userInput.dep, (err, res) =>{
            if (err) {
                console.log('there was an error saving the new Department')
                throw err;
            }
            console.log(`New Department ${userInput.dep} has been saved`)
            mainPrompt();
        });
    });    
}


function addRole() {

    inquirer.prompt(prompts.rolePrompts)
    .then(userInput => {
                
        db.query('INSERT INTO role SET ?',userInput, (err, res) =>{
            if (err) {
                console.log('there was an error saving the new role')
                throw err;
            }
            console.log(`New Role ${userInput.title} has been saved`)
            mainPrompt();
        });
    });    
}
function addEmployee() {

    inquirer.prompt(prompts.employeePrompts)
    .then(userInput => {       
        
        db.query('INSERT INTO employee SET ?',userInput, (err, res) =>{
            if (err) {
                console.log('there was an error saving the new employee')
                throw err;
            }
            console.log(`New Employee ${userInput.first_name} ${userInput.last_name} has been saved`)
            mainPrompt();
        });
    });    
}

function updateEmployee() {
       
    inquirer.prompt(prompts.updateEmpPrompts)
    .then(userInput => {       
        
        queryTxt = `UPDATE employee SET ? WHERE id = ${userInput.ID}`;

        db.query(queryTxt, userInput, (err, res) =>{
            if (err) {
                console.log('there was an error saving the new employee')
                throw err;
            }
            console.log(`New Employee ${userInput.ID} has been saved`)
            mainPrompt();
        });
    });    
}

//
// Application Start Up
//

mainPrompt();