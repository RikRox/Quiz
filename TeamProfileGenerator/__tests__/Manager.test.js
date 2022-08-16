const Manager = require('../lib/Manager.js');
jest.mock('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager ;

    expect(manager.name).toBe('Rikayla');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));

});


test('gets manager role' , () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe('Manager');
});