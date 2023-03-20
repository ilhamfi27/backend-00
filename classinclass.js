class Kendaraan {
    nyalakanKlakson() {
        console.log('tiinn!!!');
    }
}

class Pesawat {
    kendaraan;
    constructor() {
        this.kendaraan = new Kendaraan();
    }
}

const p = new Pesawat()
p.kendaraan.nyalakanKlakson()
