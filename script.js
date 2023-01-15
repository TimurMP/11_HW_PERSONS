//id, firstName, lastName, age



const persons = [];
let inputData = prompt('Enter person data, separated by ","');

//      55, 'Nathan', 'Drake', 30
//      1, 'Nathan', 'Drake', 20
//      2, 'Nathan', 'Drake', 21
//      3, 'Nathan', 'Drake', 22
//      4, 'Nathan', 'Drake', 23


while (inputData) {
    const pers = parsePersonInput(inputData);
    addPersonToArr(pers, persons)
    inputData = prompt('Enter person data, separated by ","');
}


printPersons(persons);
console.log("=============")
printStats(persons);


function printStats(persons) {
    let arr = [];
    persons.forEach((p) => arr.push(p.age));
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    const avg = arr.reduce((accum, item) => accum + item, 0) / arr.length;
    console.log(`Max age is ${max}`);
    console.log(`Min age is ${min}`);
    console.log(`Avg age is ${avg}`);


}


function printPersons(persons) {
    const  body = document.body;
    const div = document.createElement("div");
    div.style.border = '1px solid black';
    div.style.backgroundColor = 'orange';
    persons.forEach((p, i) => {
        const pp=document.createElement("p");
        pp.append(p.toString());
        div.appendChild(pp);
    });
    body.appendChild(div);
}

function parsePersonInput(inputData) {
    inputData.trim();
    const valArr = inputData.split(",");
    return new Person(valArr[0], valArr[1], valArr[2], +valArr[3]);
}


function addPersonToArr(person, arr) {
    let res = arr.findIndex(p => p.id === person.id)
    console.log(res)
    if (res !== -1) {
        alert(`Person with ID ${person.id} already exists!`)
    } else {
        arr.push(person);
    }
}


function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
    this.toString = function () {
        return `ID: ${this.id}, Name: ${this.fullName()}, Age: ${this.age}`
}



}

