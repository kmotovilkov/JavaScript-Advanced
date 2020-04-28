function uppercase(words) {
    let newStr = "";

    for (let i = 0; i < words.length; i++) {
        newStr += words.charAt(i).toUpperCase();
    }
    newStr = newStr.replace(/[,\s]+|[,\s]+|[.\s]+|[.\s]+|[;\s]+|[:\s]+/g, ", ");
    newStr = newStr.replace(/[?!]/g, '');
    console.log(newStr);
}

uppercase('Hi, how are you?');
// uppercase('hello');
uppercase('Functions in JS can be nested, i.e. hold other functions');