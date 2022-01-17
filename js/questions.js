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
        name : 'department_id',
        message : 'Enter the ID of the related department'
    }
];

var employeePrompts = [
    {
        type : 'input',
        name : 'first_name',
        message : 'Enter the employee First Name'        
    },
    {
        type : 'input',
        name : 'last_name',
        message : 'Enter the employee Last Name'
    },
    {
        type : 'input',
        name : 'role_id',
        message : 'Enter the ID of the related role'
    },
    {
        type : 'input',
        name : 'manager_id',
        message : 'Enter the ID of the manager'
    }
];

var updateEmpPrompts = [
    {
        type : 'input',
        name : 'ID',
        message : 'Enter the employee ID'        
    },
    {
        type : 'input',
        name : 'first_name',
        message : 'Enter the employee First Name'        
    },
    {
        type : 'input',
        name : 'last_name',
        message : 'Enter the employee Last Name'
    },
    {
        type : 'input',
        name : 'role_id',
        message : 'Enter the ID of the related role'
    },
    {
        type : 'input',
        name : 'manager_id',
        message : 'Enter the ID of the manager'
    }
];

export {rolePrompts, employeePrompts, updateEmpPrompts}