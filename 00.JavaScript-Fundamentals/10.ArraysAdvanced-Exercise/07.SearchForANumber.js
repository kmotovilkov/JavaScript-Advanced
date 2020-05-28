function searchNum(arr1, arr2) {

    arr1 = arr1.slice(0, arr2[0]);
    arr1 = arr1.splice(arr2[1], arr1.length);
    let exCount = 0;
    let ex = true;
    for (let num of arr1) {
        if (num === arr2[2]) {
            ex = true;
            exCount++;
        }
    }
    if (ex) {
        console.log(`Number ${arr2[2]} occurs ${exCount} times.`)
    }
}


searchNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);