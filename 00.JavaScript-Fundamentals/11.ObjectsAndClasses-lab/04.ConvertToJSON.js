function convToJSON(name, lastName, hairColor) {

    let person = {name, lastName, hairColor};
    let str = JSON.stringify(person);
    console.log(str);
}

convToJSON('George', 'Jones', 'Brown');