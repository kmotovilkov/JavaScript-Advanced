function addItem() {

    let itemList = document.getElementById('items');
    let inputText = document.getElementById('newText');

    let inputTextValue = inputText.value;
    if (!inputTextValue) {
        return;
    }
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = '[Delete]';
    a.href = "#";
    let text = document.createTextNode(inputTextValue);
    li.appendChild(text);
    li.appendChild(a);
    a.addEventListener('click', function (event) {
        event.preventDefault();
        event.target.parentElement.remove();
    });
    itemList.appendChild(li);
    inputText.value = "";
}