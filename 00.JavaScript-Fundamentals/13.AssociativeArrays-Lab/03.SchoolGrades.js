function solve(arrInput) {

    let map = new Map();

    for (let line of arrInput) {

        let grades = line.split(' ');
        let studentName = grades.shift();
        grades = grades.map(Number);

        if (map.has(studentName)) {
            grades = map.get(studentName).concat(grades);
        }

        map.set(studentName, grades);

    }


    function avg(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }

        return (aSum / a[1].length) - (bSum / b[1].length);
    }

    let sort=[...map.entries()].sort((a, b) =>avg(a,b));

    for (let e of sort){

        console.log(`${e[0]}: ${e[1].join(', ')}`);
    }

}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);