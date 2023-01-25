class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
    }

    get id() {
        return this._id;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }


    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get birthDate() {
        return this._birthDate;
    }

    get age() {
        const ageDiffMs = (new Date()) - this.birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`
    }
}

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
}

class Company1 {
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
}

const john = new Person(1000, 'John', 'Smoth', '2011-03-18');
console.log(john.id);
console.log(john.fullName());
john.lastName = 'Smith';
console.log(john.fullName());
console.log(john.age);
const peter = new Employee(2000, 'Peter', 'Jackson', '2001-05-19', 10000);
console.log(peter.salary);
peter.salary = 8000;
console.log(peter.salary);
peter.salary = 18000;
console.log(peter.salary);
console.log(peter);
console.log('===== Company =====');
const firm = new Company();
firm.addEmployee(peter);
const mary = new Employee(3000, 'Mary', 'Smith', '2003-08-08', 20000);
console.log(firm.addEmployee(mary));
console.log(firm.employees.length);
console.log(firm.addEmployee(mary));
console.log(firm.employees.length);
firm.employees.forEach(e => console.log(e));
firm.employees.length = 1;
firm.employees.forEach(e => console.log(e));