'use strict'
class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (value > this._salary) {
            this._salary = value;
        }
    }

    toString = function () {
        return `ID: ${this._id}, Name: ${this.fullName()}, Age: ${this.getAge()}, Salary: ${this._salary}`
    }


}