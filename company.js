'use strict'

class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(employee) {
        const index = this._employees.findIndex(e => e.id === employee.id);
        if (index < 0) {
            this._employees.push(employee);
        }
        return index < 0;
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    getMinAge() {
        if (this._employees.length){
            const start = this._employees[0].getAge();
            return this._employees.reduce((res, p) => p.getAge() < res ? p.getAge() : res, start);

        }
    }

    getMaxAge() {
        if (this._employees.length){
            const start = this._employees[0].getAge();
            return this._employees.reduce((res, p) => p.getAge() > res ? p.getAge() : res, start);

        }}

    getAvgAge() {
        if (this._employees.length){
            const start = this._employees[0].getAge();
            return this._employees.reduce((res, p) => p.getAge() + res, 0) / this._employees.length;
        }}


}