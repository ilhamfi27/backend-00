class Mobil {
    merk;
    cc;
    harga;
    setMerk(merk) {
        this.merk = merk;
    }
    setCc(cc) {
        this.cc = cc;
    }
    setHarga(harga) {
        this.harga = harga;
    }
    getMerk() {
        return this.merk;
    }
    getCc() {
        return this.cc;
    }
    getHarga() {
        return this.harga;
    }
    pretifyHarga(currency) {
        return `${currency}. ${this.harga}`
    }
}

const m = new Mobil();
m.setMerk('suzuki');
m.setCc(1400);
m.setHarga(76080000);
console.log(m.getMerk());
console.log(m.getCc());
console.log(m.getHarga());
console.log(m.pretifyHarga('IDR'));
