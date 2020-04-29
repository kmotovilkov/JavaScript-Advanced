function triple(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                let output = String.fromCharCode(97 + i)
                    + String.fromCharCode(97 + j)
                    + String.fromCharCode(97 + k);
                console.log(output);
            }
        }
    }

}

triple(3)