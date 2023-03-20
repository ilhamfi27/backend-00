class Kendaraan {
    nyalakanKlakson() {
        console.log('tiinn!!!');
    }
}

class Mobil extends Kendaraan {
    nyalakanKlakson() {
        console.log('telolet!');
    }
}
class Motor extends Kendaraan {
    nyalakanKlakson() {
        console.log('telolet motor!');
    }
}
class Sepeda extends Kendaraan {
    nyalakanKlakson() {
        console.log('kring!');
    }
}

const kendaraan = new Kendaraan();
const mobil = new Mobil();
const motor = new Motor();
const sepeda = new Sepeda();
kendaraan.nyalakanKlakson(); // tiinn!!!
mobil.nyalakanKlakson(); // telolet!
motor.nyalakanKlakson(); // telolet motor!
sepeda.nyalakanKlakson(); // kring!
