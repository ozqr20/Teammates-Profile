const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name,id,email,gitUser){
        super(name,id,email);

        this.gitUser = gitUser;
        this.role = 'Engineer';
    }

    getGithub() {
        return this.gitUser;
    }
    getRole() {
        return this.role;
    }
};

module.exports = Engineer;