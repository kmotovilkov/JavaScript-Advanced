function mergeArr(arr1, arr2) {

    let sumArr = "";
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            arr1[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            arr1[i] = arr1[i] + arr2[i];
        }

    }
    for (let num of arr1) {
        sumArr += num + " - ";
    }
    console.log(sumArr.slice(0,-3));
}

mergeArr(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArr(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);