function party(arr) {
    let namesIn = [];

    for (let command of arr) {
        command = command.split(" ");
        let name = command[0];
        if (command.length === 3) {
            if (!namesIn.includes(name)) {
                namesIn.push(name);
            } else {
                console.log(`${name} is already in the list!`)
            }

        } else if (command.length === 4) {
            if (namesIn.includes(name)) {
                let index = namesIn.indexOf(name);
                namesIn.splice(index, 1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        }


    }
    console.log(namesIn.join("\n"));
}

party(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
party(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);