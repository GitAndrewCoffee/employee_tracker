const inquirer = require('inquirer');

const rolePrompts = [
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

const employeePrompts = [
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

const updateEmpPrompts = [
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

module.export = {rolePrompts, employeePrompts, updateEmpPrompts}