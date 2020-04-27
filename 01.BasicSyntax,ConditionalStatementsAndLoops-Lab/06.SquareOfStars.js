function square(num) {

    if (Number.isInteger(num)=== false) {
        for (let i = 1; i <= 5; i++) {
            console.log("* ".repeat(5))
        }
    } else {
        for (let i = 1; i <= num; i++) {
            console.log("* ".repeat(num))
        }
    }
}


square(1);