const Employee = require("./Employee");
class Manager extends Employee {
    constructor(officeNumber) {
        super();
        this.officeNumber = officeNumber;
        this.role="Manager";
    }
    getRole() {return this.role; }
}

module.exports=Manager;