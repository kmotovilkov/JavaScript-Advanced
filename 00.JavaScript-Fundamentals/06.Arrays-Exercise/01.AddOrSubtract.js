function addOrSubstract(arr) {

    let sum = 0;
    let sum1 = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
        if (arr[i] % 2 === 0) {
            arr[i] = arr[i] + i;
        } else {
            arr[i] = arr[i] - i;
        }

        sum1 += Number(arr[i]);
    }
    console.log(arr);
    console.log(sum);
    console.log(sum1);
}

addOrSubstract([5, 15, 23, 56, 35]);
addOrSubstract([-5, 11, 3, 0, 2]);