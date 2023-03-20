let identitas = {
    Nama: 'Sunjoyo',
    Umur: 34,
    Alamat: 'Jl. Ahmad Yani No 56',
};
let wadah = ['air', 'beras', 'gula', 'garam', 10, true];

for (let i in wadah) {
    console.log(`Properti ${i} memiliki nilai ${wadah[i]}`);
}

for (const i of identitas) {
    console.log(i);
}
