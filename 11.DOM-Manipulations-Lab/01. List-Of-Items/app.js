function addItem() {
    let itemList = document.getElementById('items');
    let inputText = document.getElementById('newItemText');

    let inputTextValue = inputText.value;
    if (!inputTextValue) {
        return;
    }
    let li = document.createElement('li');
    li.textContent = inputTextValue;
    itemList.appendChild(li);
    inputText.value = "";
}