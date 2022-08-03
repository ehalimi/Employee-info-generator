const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


test('creates the manager object', () => {
    const manager = new Manager("Ema", 4, "emahalimi19@gmail.com", "23");

    expect(manager.name).toBe('Ema');
    expect(manager.id).toBe(4);
    expect(manager.email).toBe('emahalimi19@gmail.com');
    expect(manager.officeNumber).toBe('23');
    expect(manager.getRole()).toBe('Manager');
});