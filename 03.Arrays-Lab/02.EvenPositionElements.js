function evenPositionEl(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result += arr[i] + " ";
        }
    }
    console.log(result.trim());
}

evenPositionEl(['20', '30', '40'])
evenPositionEl(['5', '10'])