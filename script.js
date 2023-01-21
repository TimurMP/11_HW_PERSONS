//id;firstName;lastName;age
const persons = [];

addPerson.onclick = function () {
    const person = new Person(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value);
    if (findPerson(persons, person.id) === -1) {
        persons.push(person);
        if (person) {
            const li = document.createElement('li');

            const buttonDel = document.createElement("button");
            buttonDel.append(document.createTextNode('X'));
            buttonDel.classList.add('del');
            buttonDel.onclick = removeParentElement;


            li.append(document.createTextNode(person.toString()), buttonDel);
            personsList.append(li);
        }
    } else {
        alert(`Person with id: ${person.id} exists`);
    }


    personId.value = firstName.value = lastName.value = age.value = '';
}


function removeParentElement(e) {
    const valArr = e.currentTarget.parentElement.innerText;
    // console.log(e.currentTarget.parentElement.innerText);
    const id = getPersonId(valArr);
    const index = findPerson(persons, id);
    console.log(id);
    // const person =  new Person(valArr[0], valArr[1], valArr[2], +valArr[3]);
    // console.log(person);
    // const person = e.currentTarget.parentElement.innerText;
    // let index = persons.indexOf(person);
    /*    console.log(persons);
        console.log(index);*/
    // if (index !== -1) {
    persons.splice(index, 1);
    // }
    e.currentTarget.parentElement.remove();

}


// showPersons.onclick = function () {
//     printPersons(persons);
// }


calcStats.onclick = function () {
    printStats(persons);
}

function getPersonId(string) {
    const idText = string.split(",");
    return idText[0].substring(4);
}

function findPerson(persons, id) {
    return persons.findIndex(p => p.id === id);
}

// function printPersons(persons) {
//     while(personsList.firstElementChild){
//         personsList.removeChild(personsList.firstElementChild);
//     }
//     persons.forEach(p => {
//         const li = createInfoElement(p.toString(), 'li');
//         personsList.appendChild(li);
//     });
// }

function printStats(persons) {
    if (persons.length) {
        const start = persons[0].age
        const minAge = persons.reduce((res, p) => p.age < res ? p.age : res, start);
        const maxAge = persons.reduce((res, p) => p.age > res ? p.age : res, start);
        const avgAge = persons.reduce((res, p) => p.age + res, 0) / persons.length;
        const divStats = document.createElement('div')
        const h3avg = createInfoElement(`Average age: ${avgAge.toFixed(1)}`, 'h3');
        const h3min = createInfoElement(`Min age: ${minAge}`, 'h3');
        const h3max = createInfoElement(`Max age: ${maxAge}`, 'h3');
        divStats.append(h3avg, h3min, h3max);
        if (stats.firstElementChild.nextElementSibling) {
            stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
        } else {
            stats.appendChild(divStats);
        }
    } else {
        stats.appendChild(createInfoElement('No stats', 'h3'));
    }
}

function Person(id, firstName, lastName, birthday) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
    this.age = ageParser(birthday);
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
    this.toString = function () {
        return `ID: ${this.id}, Name: ${this.fullName()}, Age: ${this.age}`
    }
}

function ageParser(birthday) {
    let today = new Date();
    let bd = new Date(birthday);
    let age = today.getFullYear() - bd.getFullYear();
    let m = today.getMonth() - bd.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < bd.getDate())) {
        age--;
    }
    return age;
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}