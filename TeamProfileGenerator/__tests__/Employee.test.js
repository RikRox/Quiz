// const { exportAllDeclaration } = require('@babel/types');
// //const { default: test } = require('node:test');

const Employee = require('../lib/Employee.js');
jest.mock('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee ;

    expect(employee.name).toBe('Rikayla');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

// test('gets employee name' , () => {
//     const employee = new Employee;
//     expect(employee.getName()).toBe('Rikayla');
// });