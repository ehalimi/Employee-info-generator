const Employee = require('../lib/Employee');

test('creates the employee object', () => {
    const employee = new Employee("Ema", 1, "emahalimi19@gmail.com");

    expect(employee.name).toBe('Ema');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('emahalimi19@gmail.com');
});