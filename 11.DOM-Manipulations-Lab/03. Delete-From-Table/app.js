function deleteByEmail() {

    let customersEmail = Array
        .from(document.querySelectorAll('#customers td:last-child'));
    let inputEmail = document.querySelector('input[name="email"]');
    let result = document.getElementById("result");

    result.innerText = "";

    let inputValue = inputEmail.value;
    if (inputValue === false) {
        return;
    }

    let td = customersEmail.find(function (td) {
        return td.innerText === inputValue;
    })
    inputEmail.value = "";
    if (!td) {
        result.innerText = "Not found.";
        return;
    }
    td.parentElement.remove();
    result.innerText = "Deleted.";
}