function heroicInventory(arr) {
    let heroData = [];
    for (let line of arr) {
        let [name, level, items] = line.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];
        let hero = {
            name,
            level,
            items
        }
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);