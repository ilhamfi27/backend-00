class Kendaraan {
    nyalakanKlakson() {
        console.log('tiinn!!!');
    }
}

class Mobil extends Kendaraan {}
class Motor extends Kendaraan {}
class Sepeda extends Kendaraan {}

const kendaraan = new Kendaraan();
const mobil = new Mobil();
const motor = new Motor();
const sepeda = new Sepeda();
kendaraan.nyalakanKlakson(); // tiinn!!!
mobil.nyalakanKlakson(); // tiinn!!!
motor.nyalakanKlakson(); // tiinn!!!
sepeda.nyalakanKlakson(); // tiinn!!!
