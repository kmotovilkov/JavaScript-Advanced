function sort(arr) {

    console.log(arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    }).join("\n"));
}

sort(['alpha', 'beta', 'gamma']);
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);