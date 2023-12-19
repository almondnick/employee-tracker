// Imports
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to MySQL
const db = mysql.createConnection (
    {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'LargoGumbo69!',
        database: 'business_db'
    },
);

// Message displayed when connection successful
console.log('WELCOME TO THE EMPLOYEE DATABASE!');

// Init function to prompt user with database query options
function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'dropdown',
                choices: ['View All Employees', 'View All Departments', 'View All Roles', 'Add an Employee', 'Add a Department', 'Add a Role', 'Update Employee Role', 'Exit'],
            }
        ])
        .then((answer) => {
            switch (answer.dropdown) {
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
                case 'Add a Department':
                    addDepartment();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Update Employee Role':
                    updateRole();
                    break;
                case 'Exit':
                    process.exit();
            };
        })
};

// Query functions depending on user selection
function viewEmployees() {

}

function viewDepartments() {

}

function viewRoles() {

}

function addEmployee() {

}

function addDepartment() {

}

function addRole() {

}

function updateRole() {

}

init();