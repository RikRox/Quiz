const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

enterInfo();



function enterInfo(){
    
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: "Enter the team manager's name:"
    },
    {
    type: 'input',
    name: 'id',
    message: "Enter the team manager's id:"
    },
    {
    type: 'input',
    name: 'email',
    message: "Enter the team manager's email:"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the team manager's office number:"
        },
    {
        type: 'confirm',
        name: 'addEngineer',
        message: "Do you want to add an Engineer to the team?"
    }

]) 
    .then(({name, id, email, officeNumber}) => {
        this.manager = new Manager(name, id, email, officeNumber);

    });
}




