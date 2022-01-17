const inquirer = require('inquirer');

var rolePrompts = [
    {
        type : 'input',
        name : 'title',
        message : 'Enter the Role Title'        
    },
    {
        type : 'input',
        name : 'salary',
        message : 'Enter the role salary'
    },
    {
        type : 'input',
        name : 'department',
        message : 'Enter the ID of the related department'
    }
];

var employeePrompts = [
    {
        type : 'input',
        name : 'firstName',
        message : 'Enter the employee First Name'        
    },
    {
        type : 'input',
        name : 'lastName',
        message : 'Enter the employee Last Name'
    },
    {
        type : 'input',
        name : 'role',
        message : 'Enter the ID of the related role'
    },
    {
        type : 'input',
        name : 'manager',
        message : 'Enter the ID of the manager'
    }
];

export {rolePrompts, employeePrompts}