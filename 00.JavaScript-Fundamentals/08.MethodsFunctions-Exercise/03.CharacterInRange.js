function charRange(chr1, chr2) {

    let first = chr1.charCodeAt(0);
    let second = chr2.charCodeAt(0);
    let big = "";
    let small = "";
    if (first > second) {
        big = first;
        small = second;
    } else {
        big = second;
        small = first;
    }
    let output = "";
    for (let i = small + 1; i < big; i++) {
        output += String.fromCharCode(i) + " ";
    }
    console.log(output.trim());
}

charRange("a", "d");
charRange("C", "#");
charRange("#", ":");