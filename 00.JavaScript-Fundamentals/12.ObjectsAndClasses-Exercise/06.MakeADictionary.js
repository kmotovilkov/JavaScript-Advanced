function solve(arr) {

    let dictionary = [];
    for (let i = 0; i < arr.length; i++) {
        let word = {};
        let current = JSON.parse(arr[i]);
        word.term = Object.getOwnPropertyNames(current).join();
        word.definition = Object.getOwnPropertyDescriptor(current, word.term).value;

        if (dictionary.some(e => e.term === word.term)) {
            let j = 0;
            for(let item in dictionary) {
                if(dictionary[item].term === word.term)
                    break;
                j++;
            }
            dictionary.splice(j, 1);

            dictionary.push(word);
        } else {
            dictionary.push(word);
        }
    }
    dictionary.sort((a, b) => a.term.localeCompare(b.term));

    for (let el of dictionary) {
        console.log(`Term: ${el.term} => Definition: ${el.definition}`);
    }
}

// solve([
//         '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//         '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//         '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//         '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//         '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
//     ]
// );
solve([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
        '{"Microphone":"asd"}',
        '{"Tape":"dsf"}'
    ]
);