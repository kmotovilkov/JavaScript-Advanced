function lowerOrUpper(chr) {
    let output = "";
    if (chr.charCodeAt(0) >= 65 && chr.charCodeAt(0) <= 90) {
        output = "upper-case";
    } else if(chr.charCodeAt(0) >= 97 && chr.charCodeAt(0) <= 122){
        output = "lower-case";
    }
    console.log(output)
}

lowerOrUpper("f");