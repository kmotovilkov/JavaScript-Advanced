function personalInfo(firstName, lastName, age) {
    let person = {firstName, lastName, age};
    // let entries = Object.entries(person);
    // for (let [key, value] of entries) {
    //     console.log(`${key}: ${value}`);
    // }

    for (let prop in person){
        console.log(`${prop}: ${person[prop]}`);
    }
}

personalInfo("Peter", "Pan", "20");