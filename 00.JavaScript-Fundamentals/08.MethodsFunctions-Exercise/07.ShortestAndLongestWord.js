function matrix(num) {
    let a = "";
    for (let i = 0; i < num; i++) {
        a += num   +" ";
    }
    console.log(a);
    for (let j=1;j<num;j++){
        console.log(a);
    }
}

matrix(7);