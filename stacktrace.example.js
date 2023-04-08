function add(a, b) {
    let tambah = 0;
    tambah = a + b;
    return tambah;
}

function average(a, b) {
    return add(a, b);
}

function main() {
    const x = average(10, 20);
    console.log(x);
}

main();
