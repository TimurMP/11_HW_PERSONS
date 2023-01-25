'use strict'
class Person{
// (id, firstName, lastName, date) {
    constructor(id, firstName, lastName, date) {
        this._birthDate = new Date(date);
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._date = date;

    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get date() {
        return this._date;
    }

    get birthDate() {
        return this._birthDate;
    }

    set id(value) {
        this._id = value;
    }

    set firstName(value) {
        this._firstName = value;
    }

    set lastName(value) {
        this._lastName = value;
    }

    getAge = function () {
        const ageDiffMs = (new Date()) - this._birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    };

    fullName = function () {
        return `${this._firstName} ${this._lastName} `
    }

    toString = function () {
        return `ID: ${this._id}, Name: ${this.fullName()}, Age: ${this.getAge()}`
    }
}