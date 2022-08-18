const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name,id,email);

        this.office = office;
        this.role = 'Manager';
    }
    getOffice() {
        return this.office;
    }
    getRole() {
        return this.role;
    }

};

module.exports = Manager;