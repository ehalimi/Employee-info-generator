const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');


test('creates the engineer object', () => {
    const engineer = new Engineer("Ema", 2, "emahalimi19@gmail.com", "ehalimi");

    expect(engineer.name).toBe('Ema');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('emahalimi19@gmail.com');
    expect(engineer.github).toBe('ehalimi');
    expect(engineer.getRole()).toBe('Engineer');
});