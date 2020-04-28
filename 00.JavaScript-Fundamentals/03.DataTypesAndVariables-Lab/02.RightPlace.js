function replace(str, char, word) {
    let rplWord = str.replace("_", char);

    if (rplWord === word) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}

replace('Str_ng', 'i', 'String');