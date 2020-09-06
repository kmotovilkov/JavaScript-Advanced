function solve(commands) {
    return commands.reduce(function (acc, currComand) {
        const [op, ...others] = currComand.split(' ');
        const word = others.join(' ');
        if (op === 'add') {
            return acc.concat(word);
        } else if (op === 'remove') {
            return acc.filter(i => i !== word);
        }
        console.log(acc.join(', '));
        return acc;
    }, []);
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);