const Manager = require("./lib/Manager");
const test = new Manager();
test.name="Paul";
test.id=1;
test.email= "paulhaberle@mac.com";
test.officeNumber="903 534 2126"
console.log(test.GetRole());


// const Employee = require("./lib/Employee");

// const test = new Employee;
// test.name="Paul";
// test.id=1;
// test.email= "paulhaberle@mac.com";
// console.log(test.getRole());
