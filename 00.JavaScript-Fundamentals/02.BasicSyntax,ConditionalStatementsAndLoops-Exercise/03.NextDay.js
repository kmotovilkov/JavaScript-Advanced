function nextDay(year, mount, day) {

    let today = new Date(year, mount-=1, day += 1);

    let newY = today.getFullYear();
    let newM=today.getMonth()+1;
    let newD=today.getDate();

    console.log(newY + "-" + newM + "-" + newD);

}

nextDay(2020, 4, 26);