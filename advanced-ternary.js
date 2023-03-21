let nilai = 10;
let hasil = (nilai % 2 == 0 && 'genap') || 'ganjil';
console.log(hasil);
hasil = nilai % 2 == 0 ? 'genap' : 'ganjil';
console.log(hasil);

nilai = undefined;
hasil = nilai && 'nilai gak kosong';
console.log(hasil);
hasil = nilai || 'nilai kosong';
console.log(hasil);

const kondisiMatang = false;
const buah = 'apel';
let warna = (kondisiMatang && buah == 'apel') ? 'merah' : 'kuning' || 'hijau';
console.log(warna);
