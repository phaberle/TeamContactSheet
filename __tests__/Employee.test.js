const Employee = require("../lib/Employee");
jest.mock("../lib/Employee");

test('create an employee object', () => {
    const employee = new Employee
        (
            "Fred Flintstone",
            1,
            "f.flintstone@slate_rock_gravelco.com"
        );
    expect(employee.name).toBe('Fred Flintstone');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("f.flintstone@slate_rock_gravelco.com");
    expect(employee.role).toBe("Employee");
});

