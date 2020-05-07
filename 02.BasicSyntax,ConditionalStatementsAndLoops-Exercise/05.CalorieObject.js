function calObj(arr) {
    let product = {};

    for (let i = 0; i < arr.length; i+=2) {
        product[arr[i]] = +arr[i + 1];

    }
    console.log(product);
}

calObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);