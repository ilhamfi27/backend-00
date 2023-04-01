const arr = [
    { nama: 'biskuit', harga: 500 },
    { nama: 'minuman', harga: 1000 },
    { nama: 'ciki', harga: 250 },
];

// nambah data dari belakang
arr.push({
    nama: 'sprit',
    harga: 2500,
});

// nambah data dari depan
arr.unshift({
    nama: 'panta',
    harga: 2600,
});

// nambah data dari tengah berdasarkan index
arr.splice(2, 0, {
    nama: 'coca',
    harga: 2700,
});

arr.pop(); // hapus dari belakang
arr.shift(); // hapus dari depan
arr.splice(2, 1); // hapus dari tengah berdasarkan index

const arr2 = arr.slice(1, 3)    // menyalin array dari index ke,
                                // sebanyak apa
console.log(arr);
console.log(arr2);
