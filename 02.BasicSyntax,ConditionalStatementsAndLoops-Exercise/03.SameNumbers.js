function sameNums(num) {
    num = num.toString();
    let sum = 0;
    let result = true;


    for (let i = 0; i < num.length; i++) {
        sum += +num[i];

        if (num[i] !== num[0]) {
            result=false;
        }
    }
    console.log(result);
    console.log(sum);

}

sameNums(1234)