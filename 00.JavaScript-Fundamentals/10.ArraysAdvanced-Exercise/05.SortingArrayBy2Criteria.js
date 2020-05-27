function sorting(arr) {

    function sortByLenght(a, b) {
        return a.length - b.length || sortByName(a,b);
    }
    function sortByName(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }
    arr.sort((a, b) => sortByLenght(a, b)).forEach(el => console.log(el));
}
    sorting(["alpha", "beta", "gamma"]);
    sorting(["test", "Deny", "omen", "Default"]);
