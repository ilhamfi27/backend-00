// deklarasi class
class Mobil {
    // properti class
    warna = 'merah';
    merk = 'toyota';
    tipe = 'supra';
    ukuran = [1000, 2000, 1500];

    getDataMobil() {
        const obj = {
            warnaMobil: this.warna,
            merkDariMobil: this.merk,
            tipeMobilTersebut: this.tipe,
            ukuranMobilnya: this.ukuran,
        };
        return obj;
    }

    setDataMobil(warna, merk, tipe, ukuran) {
        this.warna = warna;
        this.merk = merk;
        this.tipe = tipe;
        this.ukuran = ukuran;
    }
}

// instansiasi sebuah class
// instansiasi = pembuatan object dari sebuah class
const m = new Mobil();
let dataMobil = m.getDataMobil();
console.log(dataMobil);
m.setDataMobil('hijau', 'lambo', 'huracan', [1000, 1500, 2000])
dataMobil = m.getDataMobil();
console.log(dataMobil);

