function countWord([arr]) {

    let wordArr = arr.split(/\W+/).filter(w => w !== "");
    let object = {};

    for (let word of wordArr) {
        if (!object.hasOwnProperty(word)) {
            object[word]=1;
        }else {
            object[word]++;
        }
    }

    console.log(JSON.stringify(object));
}


countWord(['JS devs use Node.js for server-side JS.-- JS for devs']);