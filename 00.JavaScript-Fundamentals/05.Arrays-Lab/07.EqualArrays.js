function equalArr(arr1, arr2) {
    let sum = 0;
    let isEquals = true;
    let badIndex = "";
    for (let i = 0; i < arr1.length; i++) {
        if (+arr1[i] !== +arr2[i]) {
            badIndex = i;
            isEquals = false;
            break;
        } else {
            sum += Number(arr1[i]);
        }
    }
    if (isEquals) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${badIndex} index`);
    }
}

equalArr(['10', '20', '30'], ['10', '20', '30']);
// equalArr(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);