function growingWord() {

    const exerciseDiv=document.getElementById("exercise");
    const wordParagraph=exerciseDiv.querySelector("p");

    let px = 2;

    let colorChanges =
        {
            "blue": "green",
            "green": "red",
            "red": "blue"
        };
    if (!wordParagraph.hasAttribute("style")) {
        wordParagraph.setAttribute("style", `color:blue; font-size: ${px}px`);

    } else {
        let currentPx = wordParagraph.style["font-size"];
        px = currentPx.substr(0, currentPx.length - 2) * 2;
        let currentColor = wordParagraph.style.color;
        wordParagraph.setAttribute("style", `color:${colorChanges[currentColor]}; font-size: ${px}px`)
    }
}