function oddNEvenSum(num) {

    let oddSum = 0;
    let evenSum = 0;
    num = num.toString();

    for (let i = 0; i < num.length; i++) {
        if (+num[i] % 2 === 0) {
            evenSum += Number(num[i]);
        } else {
            oddSum += Number(num[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}


oddNEvenSum(1000435);
oddNEvenSum(3495892137259234);