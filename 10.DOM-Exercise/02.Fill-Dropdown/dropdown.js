function addItem() {

    let itemText = document.querySelector("#newItemText").value;
    let itemValue = document.querySelector("#newItemValue").value;

    const option = document.createElement("option");

    option.textContent = itemText;
    option.value = itemValue;

    document.querySelector("#menu").appendChild(option);

    itemText = document.querySelector("#newItemText").value="";
    itemValue = document.querySelector("#newItemValue").value="";
}