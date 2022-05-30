const Engineer = require('../lib/Engineer');
jest.mock("../lib/Employee");

test('create a engineer object', () => {
    const engineer = new Engineer
        (
            "Fred Flintstone",
            1,
            "f.flintstone@slate_rock_gravelco.com"
        );
    expect(engineer.name).toBe('Fred Flintstone');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("f.flintstone@slate_rock_gravelco.com");
    expect(engineer.role).toBe("Engineer");
});