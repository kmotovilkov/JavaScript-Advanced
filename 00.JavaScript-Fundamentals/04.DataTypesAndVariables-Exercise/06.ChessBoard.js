function chesBoard(num) {
    let colour = "black";
    let nextColour = "";

    console.log('<div class="chessboard">')

    for (let rows = 1; rows <= num; rows++) {
        console.log('  <div>');

        for (let columns = 1; columns <= num; columns++) {
            console.log(`    <span class="${colour}"></span>`)

            nextColour = colour;
            if (nextColour === "black") {
                colour = "white";
            } else {
                colour = "black";
            }
        }
        console.log('  </div>');
        if (num % 2 === 0) {
            nextColour = colour;
            if (nextColour === "black") {
                colour = "white";
            } else {
                colour = "black";
            }
        }
    }


    console.log('</div>');
}