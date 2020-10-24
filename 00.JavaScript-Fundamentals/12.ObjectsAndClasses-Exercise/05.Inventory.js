function solve(arr) {

    let heroesArr = [];

    for (let i = 0; i < arr.length; i++) {
        let hero = {};
        let heroInfo = arr[i].split(' / ');
        hero.name = heroInfo[0];
        hero.level = heroInfo[1];
        hero.item = heroInfo[2].split(', ').sort();
        heroesArr.push(hero);
    }
    heroesArr.sort((a, b) => (a.level - b.level));
    for (let el of heroesArr) {
        console.log(`Hero: ${el.name}\nlevel => ${el.level}\nitems => ${el.item.join(', ')}`);
    }

}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
);