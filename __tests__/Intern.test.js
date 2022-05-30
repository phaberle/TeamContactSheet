const Intern = require('../lib/Intern');
jest.mock("../lib/Employee");

test('create a engineer object', () => {
    const intern = new Intern
        (
            "Fred Flintstone",
            1,
            "f.flintstone@slate_rock_gravelco.com"
        );
    expect(intern.name).toBe('Fred Flintstone');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("f.flintstone@slate_rock_gravelco.com");
    expect(intern.role).toBe("Intern");
});