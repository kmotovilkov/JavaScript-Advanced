function login(input) {

    function reverse(str) {
        return str.split('').reverse().join('');

    }

    let reversPass = "";
    let username = input[0].toString();
    let count = 0;

    for (let i = 1; i <= input.length - 1; i++) {

        reversPass = reverse(input[i]);

        if (reversPass === username) {
            console.log(`User ${username} logged in.`);
        } else if (count >= 3) {
            console.log(`User ${username} blocked!`);
        } else {
            console.log("Incorrect password. Try again.");
            count++;
        }

    }

}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
