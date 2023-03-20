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
// collect keys ke dalam array
const mobilFerrarriKeys = Object.keys(mobilFerrari);

// loop keys dari objectnya
for (let i = 0; i < mobilFerrarriKeys.length; i++) {
    // ambil value dari keys nya
    const key = mobilFerrarriKeys[i];

    // ambil value object berdasarkan keys
    console.log(key, mobilFerrari[key]);
}
