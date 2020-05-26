function firstLastKNum(arr) {
let num=arr.shift();

    console.log(arr.slice(0,num).join(" "));
    console.log(arr.splice(arr.length-num,num).join(" "));
    // console.log(arr.reverse().slice(0,num).reverse().join(" "));

}

firstLastKNum([2, 7, 8, 9]);
firstLastKNum([3, 6, 7, 8, 9]);