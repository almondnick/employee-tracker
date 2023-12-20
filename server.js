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
    }
);

// Message displayed when connection is successful
console.log('WELCOME TO THE EMPLOYEE DATABASE!');

// Init function to prompt user with database query options
function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'dropdown',
                choices: ['View All Employees', 'View All Departments', 'View All Roles', 'Add an Employee', 'Add a Department', 'Add a Role', 'Exit'],
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
                case 'Exit':
                    process.exit();
            }
        })
};

// Query functions depending on user selection
function viewEmployees() {
    console.log('NOW VIEWING ALL EMPLOYEES...');
    db.query('SELECT * FROM employees', function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            init();
        }
    });
};

function viewDepartments() {
    console.log('NOW VIEWING ALL DEPARTMENTS...');
    db.query('SELECT * FROM departments', function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            init();
        }
    });
};

function viewRoles() {
    console.log('NOW VIEWING ALL ROLES...');
    db.query('SELECT * FROM roles', function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            init();
        }
    });
};

function addEmployee() {
    console.log('ANSWER THE FOLLOWING PROMPTS TO ADD AN EMPLOYEE...');
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the FIRST NAME of the employee you would like to add?',
                name: 'newFirstName'
            },
            {
                type: 'input',
                message: 'What is the LAST NAME of the employee you would like to add?',
                name: 'newLastName'
            },
            {
                type: 'input',
                message: 'What is the ROLE ID of the employee you would like to add?',
                name: 'newRoleId'
            },
            {
                type: 'input',
                message: 'What is the MANAGER ID of the employee you would like to add?',
                name: 'newManagerId'
            },
        ])
        .then((answer) => {
            newFirstName = answer.newFirstName;
            newLastName = answer.newLastName;
            newRoleId = answer.newRoleId;
            newManagerId = answer.newManagerId;
            db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id)
            VALUES ('${newFirstName}', '${newLastName}', '${newRoleId}', '${newManagerId}');`, function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('EMPLOYEE ADDED TO DATABASE!');
                    init();
                }
            })
        })
    };

function addDepartment() {
    console.log('ANSWER THE FOLLOWING PROMPTS TO ADD A DEPARTMENT...');
    inquirer
        .prompt(
            {
                type: 'input',
                message: 'What is the NAME OF THE DEPARTMENT you would like to add?',
                name: 'newDepartment'
            }
        )
        .then((answer) => {
            newDepartment = answer.newDepartment;
            db.query(`INSERT INTO departments (name) VALUES ('${newDepartment}')`, function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('DEPARTMENT ADDED TO DATABASE!');
                    init();
                }
            })
        })
};

function addRole() {
    console.log('ANSWER THE FOLLOWING PROMPTS TO ADD A ROLE...');
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the TITLE OF THE ROLE you would like to add?',
                name: 'newRoleName'
            },
            {
                type: 'input',
                message: 'What is the SALARY OF THE ROLE you would like to add?',
                name: 'newRoleSalary'
            },
            {
                type: 'input',
                message: 'What is the DEPARTMENT ID OF THE ROLE you would like to add?',
                name: 'newDepartmentId'
            }
        ])
        .then((answer) => {
            newRoleName = answer.newRoleName;
            newRoleSalary = answer.newRoleSalary;
            newDepartmentId = answer.newDepartmentId;
            db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${newRoleName}', '${newRoleSalary}', '${newDepartmentId}');`, function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('ROLE ADDED TO DATABASE!');
                    init();
                }
            })
        })
};

init();