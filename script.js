const persons = [];

addPerson.onclick = function () {
    const person = new Person(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value);
    if (persons.findIndex(p => p.id === person.id) >= 0) {
        alert(`Person with id: ${person.id} exists`);
    } else {
        clearStats();
        persons.push(person);
        const li = createInfoElement(person.toString(), 'li');
        const buttonDel = createButtonDelete(function () {
            const index = persons.findIndex(p => p.id === person.id);
            persons.splice(index, 1);
            clearStats();
        });
        buttonDel.classList.add('del');
        li.append(buttonDel);
        personsList.append(li);
    }
    personId.value = firstName.value = lastName.value = age.value = '';
}

calcStats.onclick = function () {
    if (persons.length) {
        const start = persons[0].getAge();
        const minAge = persons.reduce((res, p) => p.getAge() < res ? p.getAge() : res, start);
        const maxAge = persons.reduce((res, p) => p.getAge() > res ? p.getAge() : res, start);
        const avgAge = persons.reduce((res, p) => p.getAge() + res, 0) / persons.length;
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

function printPersons(persons) {
    while (personsList.firstElementChild) {
        personsList.removeChild(personsList.firstElementChild);
    }
    persons.forEach(p => {
        const li = createInfoElement(p.toString(), 'li');
        personsList.appendChild(li);
    });
}

function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.removeChild(stats.firstElementChild.nextElementSibling);
    }
}

