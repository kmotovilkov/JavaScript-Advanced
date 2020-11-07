function solve(day) {
    day = day.toLowerCase();
    let output;
    if (day === 'monday') {
        output = 1;
    } else if (day === 'tuesday') {
        output = 2;
    } else if (day === 'wednesday') {
        output = 3;
    } else if (day === 'thursday') {
        output = 4;
    } else if (day === 'friday') {
        output = 5;
    } else if (day === 'saturday') {
        output = 6;
    } else if (day === 'sunday') {
        output = 7;
    } else {
        output = 'error';
    }
    console.log(output);
}

solve('Monday');
solve('Friday');
solve('Invalid');