function magicSum(arr) {

    let arr1 = arr[0].split(" ");
    let num = +arr[1];

    let output = [];

    for (let i = 0; i < arr1.length-1; i++) {

        for (let j = i + 1; j < arr1.length; j++) {
            if (+arr1[i] + Number(arr1[j]) === num) {
                output.push(arr1[i] + " " + arr1[j]);
            }
        }
    }
    console.log(output.join("\n"));
}

magicSum(['1 7 6 2 19 23', '8']);