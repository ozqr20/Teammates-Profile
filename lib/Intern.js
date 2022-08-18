const Employee = require('../lib/Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email);

        this.intern = school;
        this.role = 'Intern';
    }

    getSchool() {
        return this.intern;
    }

    getRole() {
        return this.role;
    }
};

module.exports = Intern;

