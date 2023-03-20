const mobilFerrari = {
    banDepanKiri: 'r17',
    banDepanKanan: 'r17',
    banBelakangKiri: 'r17',
    banBelakangKanan: 'r17',
    merek: 'ferrari',
    cc: 5000,
    hatchback: false,
    warna: 'merah',
    'panjang mobil': '200cm',
};
const key = 'merek';
console.log(mobilFerrari[key]); // buat ngambil
console.log(mobilFerrari.hatchback); // buat ngambil
mobilFerrari.lebar = '180cm'; // buat ganti data pada sebuah key
mobilFerrari['lebar'] = '170cm'; // buat ganti data pada sebuah key
delete mobilFerrari.hatchback // buat hapus
console.log(mobilFerrari);
