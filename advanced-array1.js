const arr = [
    { nama: 'biskuit', harga: 500 },
    { nama: 'minuman', harga: 1000 },
    { nama: 'ciki', harga: 250 },
];

function forEach(data) {
    data.forEach(function (d) {
        console.log(d.nama);
        console.log(d.harga);
        console.log('========================');
    });
}

function forof(data) {
    for (const d of data) {
        console.log(d);
        console.log(d.nama);
        console.log(d.harga);
        console.log('========================');
    }
}

function forin(data) {
    for (const d in data) {
        console.log(data[d]);
        console.log(data[d].nama);
        console.log(data[d].harga);
    }
}

forEach(arr);
forof(arr);
forin(arr);
