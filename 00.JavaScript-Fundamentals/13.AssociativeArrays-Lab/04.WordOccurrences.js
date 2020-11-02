function solve(arrInput) {

    let words = new Map();

    for (let word of arrInput) {
        if (words.has(word)) {
            let current = words.get(word);
            words.set(word, current += 1);
        } else {
            words.set(word, 1);
        }
    }
    let sortedWords = [...words].sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} -> ${count} times`);
    }
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);