const produk = {
    nama: 'biskuit',
    harga: 5000,
    tambah: function (nilai1, nilai2) {
        return nilai1 + nilai2;
    },
    kurang: function (nilai) {
        return nilai;
    },
    vendor: {
        nama: 'ilham corp',
        alamat: 'gegerkalong',
    },
    ukuran: ['10gr', '5gr', '1gr'],
    childProduct: [
        { nama: 'biskuit', harga: 500 },
        { nama: 'minuman', harga: 1000 },
        { nama: 'ciki', harga: 250 },
    ],
};
console.log(produk.tambah(5));
