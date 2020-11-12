function solve(n1,n2){
    while(n2){
        let a=n2;
        n2=n1%n2;
        n1=a;
    }
    console.log(n1);
}

solve(15, 5);
solve(2154, 458);