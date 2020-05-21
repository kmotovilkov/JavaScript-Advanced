function perfectNUmber(num) {
    let temp = 0;
    let output = "";
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            temp += i;
            i=i.toString();
            output+=i+" + ";
        }
    }
    if (temp === num && temp !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}


perfectNUmber(6);
perfectNUmber(28);
perfectNUmber(1236498);