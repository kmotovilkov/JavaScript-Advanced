function city(name, area, population,country, postCode) {

    let city={name,area,population,country,postCode};
    //
    // let entries=Object.entries(city);
    // for (let[key,value] of entries){
    //     console.log(`${key} -> ${value}`);
    // }

    for (let prop in city){
        console.log(`${prop} -> ${city[prop]}`);
    }
}
city("Sofia"," 492", "1238438", "Bulgaria", "1000");