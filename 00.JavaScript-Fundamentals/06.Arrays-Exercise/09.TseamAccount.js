function solve(arr) {

    let accountArr = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i].split(' ');
        let command = currentEl[0];
        let game = currentEl[1];

        if (command === 'Install') {
            if (!accountArr.includes(game)) {
                accountArr.push(game);
            }
        }

        else if (command === 'Uninstall') {
            let index = accountArr.indexOf(game);
            if (accountArr.includes(game)) {
                accountArr.splice(index, 1);
            }
        }

        else if (command === 'Update') {
            if (accountArr.includes(game)) {
                let index = accountArr.indexOf(game);
                let updatedGame = accountArr.splice(index, 1).join();
                accountArr.push(updatedGame);
            }
        }

        else if (command === 'Expansion') {
            let expArr = game.split('-');
            let currentGame = expArr[0];
            let ex = expArr[1];
            if (accountArr.includes(currentGame)) {
                let index = accountArr.indexOf(currentGame);
                let updatedGame = `${currentGame}:${ex}`;
                accountArr.splice(index + 1, 0, updatedGame);
            }
        }
        if (command === 'Play!' && game === undefined) {
            break;
        }
    }
    console.log(accountArr.join(' '));
}

solve(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
solve(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);