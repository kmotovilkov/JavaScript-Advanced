function solve(arr) {

    let players = {};
    let cardMap = {
        p: {
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        },
        t: {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        }
    };
    for (let line of arr) {
        let [name, cards] = line.split(': ');
        if (!players[name]) {
            players[name] = new Set(cards.split(', '));
        } else {
            cards.split(', ').forEach(el => {
                players[name].add(el);
            })

        }

    }

    function cardsSum(cards) {
        let powerSum = 0;

        cards.forEach(card => {
            let tokens = card.split('');

            let power = tokens.slice(0, tokens.length - 1).join('');
            let type = tokens.slice(-1).join('');

            let p = 0;
            if (!cardMap.p[power]) {
                p = Number(power);
            }else{
                p=cardMap.p[power];
            }
            powerSum += (p * cardMap.t[type]);

        });

        return powerSum;
    }

    Object.keys(players).forEach(player => {
        console.log(`${player}: ${cardsSum(players[player])}`);
    });

}

solve(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);
