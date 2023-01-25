function Person(id, firstName, lastName, date) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(date);
    this.getAge = function () {
        const ageDiffMs = (new Date()) - this.birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    };
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
    this.toString = function () {
        return `ID: ${this.id}, Name: ${this.fullName()}, Age: ${this.getAge()}`
    }
}