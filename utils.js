function createButtonDelete(callBack) {
    const buttonDel = createInfoElement('X', 'button');
    buttonDel.addEventListener('click', function (e) {
        e.target.parentElement.remove();
        callBack();
    });
    return buttonDel;
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}