function palindromeIntegers(arr) {
    function palindrome(num) {
        num = num.toString();
        let revNum = "";
        for (let i = num.length - 1; i >= 0; i--) {
            revNum += num[i];
        }
        return num === revNum;
    }

    for (let j = 0; j < arr.length; j++) {
        console.log(palindrome(arr[j]));
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);