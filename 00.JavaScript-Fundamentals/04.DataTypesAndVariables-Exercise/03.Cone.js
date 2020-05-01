function cone(n1, n2) {
    let volume = 1 / 3 * Math.PI * Math.pow(n1, 2) * n2;
    let l = Math.sqrt(Math.pow(n1, 2) + Math.pow(n2, 2));
    let area = Math.PI * (n1 * l) + Math.PI * Math.pow(n1, 2);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

// cone(3.3, 7.8)
cone(3, 5)