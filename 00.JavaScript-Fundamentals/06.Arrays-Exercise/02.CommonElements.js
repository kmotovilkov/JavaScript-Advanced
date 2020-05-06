function commonEl(arr1, arr2) {
    for (let a of arr1) {
        for (let b of arr2) {
            if (a === b) {
                console.log(b)
            }
        }
    }
}

commonEl(["Hey", "hello", 2, 4, "Pesho", "e"], ["Pecho", 10, "hey", 4, "hello", "2"]);
commonEl(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]);