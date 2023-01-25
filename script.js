'use strict'

const company1 = new Company();
addPerson.onclick = function () {
    const employee = new Employee(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value, salary.value.trim());
    const employeeAdded = company1.addEmployee(employee);
    if (!employeeAdded) {
        alert(`Employee with id: ${employee.id} exists`);
    } else {
        clearStats();
        const li = createInfoElement(employee.toString(), 'li');
        const buttonDel = createButtonDelete(function () {
            company1.removeEmployee(employee.id)
            clearStats();
        });
        buttonDel.classList.add('del');
        li.append(buttonDel);
        personsList.append(li);
    }
    personId.value = firstName.value = lastName.value = age.value = salary.value = '';
}

calcStats.onclick = function () {
    if (company1.employees.length) {
        const divStats = document.createElement('div')
        const h3avg = createInfoElement(`Average age: ${company1.getAvgAge().toFixed(2)}`, 'h3');
        const h3min = createInfoElement(`Min age: ${company1.getMinAge()}`, 'h3');
        const h3max = createInfoElement(`Max age: ${company1.getMaxAge()}`, 'h3');
        const h3TotalSalary = createInfoElement(`Total salary: ${company1.totalSalary()}`, 'h3');
        const h3AvgSalary = createInfoElement(`Average salary: ${company1.avglSalary().toFixed(1)}`, 'h3');
        divStats.append(h3avg, h3min, h3max, h3TotalSalary, h3AvgSalary);
        if (stats.firstElementChild.nextElementSibling) {
            stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
        } else {
            stats.appendChild(divStats);
        }
    } else {
        stats.appendChild(createInfoElement('No stats', 'h3'));
    }
}




