function loadingBar(num) {
    let percent = "";
    let dot = "";
    for (let i = 0; i < num / 10; i++) {
        percent += "%";
    }
    for (let j = 0; j < 10 - (num / 10); j++) {
        dot += ".";
    }
    if (num < 100) {
        console.log(`${num}% [${percent}${dot}]`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log(`${num}% [${percent}${dot}]`);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);