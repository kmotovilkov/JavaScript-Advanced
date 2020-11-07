function solve(words) {
    words = words
        .split(/\W+/)
        .filter(word => word.trim().length > 0)
        .map(e => e.toUpperCase()).join(', ');
    console.log(words);
}

solve('Hi, how are you?');
solve('hello');