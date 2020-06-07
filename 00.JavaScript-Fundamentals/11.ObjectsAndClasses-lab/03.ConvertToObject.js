function cocertToObject(jsonStr) {
    let person = {};
    person = JSON.parse(jsonStr);
    // let entries = Object.entries(person);
    // for (let [key, value] of entries) {
    //     console.log(`${key}: ${value}`);
    // }
    for (let prop in person){
        console.log(`${prop}: ${person[prop]}`);
    }
}

cocertToObject('{"name": "George", "age": 40, "town": "Sofia"}');