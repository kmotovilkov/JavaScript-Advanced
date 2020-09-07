function solve(commands) {
    const commandMap = {
        create: (acc, name, _, inheritName) => {

            if (!inheritName) {
                acc[name] = {};
                return acc;
            }
            const parent = acc[inheritName];
            acc[name] = Object.create(parent);
            return acc;
        },

        set: (acc, name, propName, propValue) => {
            acc[name][propName] = propValue;
            return acc;
        },
        print: (acc, name) => {
            let itemss = [];
            for (let a in acc[name]) {
                itemss.push(`${a}:${acc[name][a]}`);
            }
            console.log(itemss.join(', '));
            return acc;
        }
    };

    return Object.values(commands.reduce((acc, currCommand) => {
        const [op, v1, v2, v3] = currCommand.split(' ');
        return commandMap[op](acc, v1, v2, v3);
    }, {}));
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);