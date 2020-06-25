function solve() {
    const input = document.getElementById("input");
    const selectMenuTo = document.getElementById("selectMenuTo");
    const output = document.getElementById("result");

    if (input === null || selectMenuTo === null || output === null) {
        throw new Error("Missing elements!");
    }
    createOptions();

    document.querySelector("#container > button")
        .addEventListener("click", onClick);

    function createOptions() {
        const binary = document.createElement("option");
        binary.textContent = "Binary";
        binary.value = "binary";
        selectMenuTo.appendChild(binary);
        const hexadecimal = document.createElement("option");
        hexadecimal.textContent = "Hexadecimal";
        hexadecimal.value = "hexadecimal";
        selectMenuTo.appendChild(hexadecimal);
    }

    function onClick() {
        let num = Number(input.value);
        let result;
        if (selectMenuTo.value === "binary") {
            result = binaryConcertor();
        } else if (selectMenuTo.value === "hexadecimal") {
            result = hexadecimalConvertor();
        }
        output.value = result;

        function binaryConcertor() {
            return (num >>> 0).toString(2)
        }

        function hexadecimalConvertor() {
            return num.toString(16).toUpperCase();
        }
    }
}