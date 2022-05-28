const Manager = require('../lib/Manager');
jest.mock("../lib/Employee");

test('create a manager object', () => {
    const manager = new Manager
        (
            "Fred Flintstone",
            1,
            "f.flintstone@slate_rock_gravelco.com"
        );
    expect(manager.name).toBe('Fred Flintstone');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("f.flintstone@slate_rock_gravelco.com");
    expect(manager.role).toBe("Manager");
});