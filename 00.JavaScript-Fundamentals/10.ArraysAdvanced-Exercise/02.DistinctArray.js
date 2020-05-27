function distinct(arr) {
    let unicoeArr = [];
    for (let el of arr) {
        if (!unicoeArr.includes(el)){
            unicoeArr.push(el);
        }
    }
    console.log(unicoeArr.join(" "));
}

distinct([1, 2, 3, 4]);
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);