const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');


test('creates the intern object', () => {
    const intern = new Intern("Ema", 3, "emahalimi19@gmail.com", "NAU");

    expect(intern.name).toBe('Ema');
    expect(intern.id).toBe(3);
    expect(intern.email).toBe('emahalimi19@gmail.com');
    expect(intern.school).toBe('NAU');
    expect(intern.getRole()).toBe('Intern');
});