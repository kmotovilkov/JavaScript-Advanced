function gladiatorEx(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldCount = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;
        }
        if (i % 3 === 0) {
            expenses += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            expenses += shieldPrice;
            shieldCount++;
        }
        if (shieldCount % 2 === 0 && shieldCount > 0) {
            expenses += armorPrice;
            shieldCount = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiatorEx(7, 2, 3, 4, 5)
// gladiatorEx(23, 12.50, 21.50, 40, 200)