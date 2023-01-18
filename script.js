//id, firstName, lastName, age


const persons = [];
addp.addEventListener('click', addPersonOnButtonClick);
showAll.addEventListener('click', e => printPersons(persons));
stats.addEventListener('click', e => printStats(persons));


// let inputData = prompt('Enter person data, separated by ","');

//      55, 'Nathan', 'Drake', 30
//      1, 'Nathan', 'Drake', 20
//      2, 'Nathan', 'Drake', 21
//      3, 'Nathan', 'Drake', 22
//      4, 'Nathan', 'Drake', 23


// while (inputData) {
//     const pers = parsePersonInput(inputData);
//     addPersonToArr(pers, persons)
//     inputData = prompt('Enter person data, separated by ","');
// }


// printPersons(persons);
// console.log("=============")
// printStats(persons);


function printStats(persons) {
    const body = document.body;
    const div = document.createElement("div");
    div.style.border = '1px solid black';
    div.style.backgroundColor = 'brown';

    let arr = [];
    persons.forEach((p) => arr.push(p.age));
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    const avg = arr.reduce((accum, item) => accum + item, 0) / arr.length;

    const maxp = document.createElement("p");
    maxp.append(`Max age is ${max}`);
    div.appendChild(maxp);
    body.appendChild(div);
    const minp = document.createElement("p");
    minp.append(`Min age is ${min}`);
    div.appendChild(minp);
    body.appendChild(div);
    const avgp = document.createElement("p");
    avgp.append(`Avg age is ${avg}`);
    div.appendChild(avgp);
    body.appendChild(div);
    // console.log(`Max age is ${max}`);
    // console.log(`Min age is ${min}`);
    // console.log(`Avg age is ${avg}`);


}


function printPersons(persons) {

    const body = document.body;

    const div = document.createElement("div");
    div.style.border = '1px solid black';
    div.style.backgroundColor = 'orange';
    persons.forEach((p, i) => {
        const pp = document.createElement("p");
        pp.append(p.toString());
        div.appendChild(pp);
    });
    body.appendChild(div);
}

// function parsePersonInput(inputData) {
//     inputData.trim();
//     const valArr = inputData.split(",");
//     return new Person(valArr[0], valArr[1], valArr[2], +valArr[3]);
// }

function addPersonOnButtonClick() {
    const pers = parsePersonInput();
    addPersonToArr(pers, persons);
    console.log(persons);
    idInput.value = '';
    nameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';

}

function parsePersonInput(event) {
    // const valArr = [idInput.value, nameInput.value, lastNameInput.value, ageInput.value];
    // const persons = [];
    // valArr.push(idInput.value);
    // console.log('---------')
    // console.log(valArr);
    // for (let i = 0; i < people.children.length; i++) {
    //     valArr.push(people.children[i]);
    // }
    // valArr.forEach(n => {
    //     persons.push(n.value);
    // })
    // console.log(persons);
    return new Person(idInput.value, nameInput.value, lastNameInput.value, +ageInput.value);
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

