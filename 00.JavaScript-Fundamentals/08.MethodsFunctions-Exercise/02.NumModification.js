function numMod(num) {

    while (avg(num) < 5) {
        num=num.toString();
        num += 9;
    }
    console.log(num);

    function numSum(number) {
        let strNum = number.toString();
        let sum = 0;
        for (let i = 0; i < strNum.length; i++) {
            sum += Number(strNum[i]);
        }
        return sum;
    }

    function avg(num) {
        return numSum(num) / num.toString().length;

    }


}


numMod(101);
numMod(5835);