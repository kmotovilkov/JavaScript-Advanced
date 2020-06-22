function solve() {
    let inputParagraph = document.querySelector('#input');
    let outputDiv = document.querySelector('#output');
    let paragraphContent = inputParagraph.innerText;

    let sentenceArray = Array.from(paragraphContent.split(". "));
    let count = 0;
    let currentParagraph = document.createElement("p");

    for (let i = 0; i < sentenceArray.length; i++) {
        count++;
        currentParagraph.innerText += sentenceArray[i];
        if (count === 3) {
            outputDiv.appendChild(currentParagraph);
            currentParagraph = document.createElement("p");
            count = 0;
        }
    }
    if (count !== 0) {
        outputDiv.appendChild(currentParagraph);
    }
}