function solve(inputArr) {

    let words = inputArr.shift().split(' ');
    let wordMap = new Map();
    let count = 0;
    for (let w of words) {
        wordMap.set(w, count);
    }

    for (let word of inputArr) {
        if (wordMap.has(word)) {
            count = wordMap.get(word) + 1;
            wordMap.set(word, count);
        }
    }

    let sorted=[...wordMap].sort((a,b)=>b[1]-a[1]);

    for (let[word, num] of sorted){
        console.log(`${word} - ${num}`);
    }

}

solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']
);