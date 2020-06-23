function solve() {
    document.querySelector("button").addEventListener("click", onClick);
    let list = {};

    const items = document.querySelector("ol").querySelectorAll("li");
    [...items].forEach(e => {
        if (e.textContent.trim().length === 0) {
            return;
        }
        const char = e.textContent[0].toLocaleUpperCase();
        list[char] = e.textContent;
    });


    function onClick() {
        const input = document.querySelector("input");
        const value = input.value;
        const char = value[0].toLocaleUpperCase();


        if (list.hasOwnProperty(char) === false) {
            list[char] = value;

        } else {
            list[char] = list[char] + ", " + value;
        }

        let index = char.charCodeAt(0) - 65;
        items[index].textContent = list[char];

        input.value = "";
    }
}