function passwordValidator(str) {

    function validLeght(pass) {
        return pass.length >= 6 && pass.length <= 10;
    }

    function validSymbol(pass) {
        return (/^[A-Za-z0-9]+$/.test(pass));
    }

    function validDigits(pass) {
        let digitsCount = 0;
        pass = pass.toLowerCase();
        for (let i = 0; i < pass.length; i++) {
            let ascEl = pass[i].charCodeAt(0);
            if (ascEl >= 48 && ascEl <= 57) {
                digitsCount++;
            }
        }

        return digitsCount >= 2;
    }

    if (validDigits(str) && validSymbol(str) && validDigits(str)) {
        console.log("Password is valid");
    }
    if (!validLeght(str)) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!validSymbol(str)) {
        console.log("Password must consist only of letters and digits");
    }
    if (!validDigits(str)) {
        console.log("Password must have at least 2 digits");
    }
}

passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
