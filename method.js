// method procedure
// deklarasi cara 1
// method biasa
function hello(nama, asal = 'indonesia') {
  console.log(
    'halo selamat datang ' +
      nama +
      ' dari ' +
      asal +
      ' di bootcamp productzilla. semoga ' +
      nama +
      ' semangat dan sehat selalu ya'
  );
}

// deklarasi cara 2
// anonymous function
const greetings = function (name) {
  console.log(`halo ${name}, welcome to productzilla`);
};

// deklarasi cara 3
// arrow function
const sapa = (nama) => {
  console.log(`hello semoga ${nama} sehat selalu`);
};

hello();
hello('zilla');
hello('sumbul', 'semarang');
greetings('raden');
sapa('budogol');

function hitungPenjumlahan(angka1, angka2) {
    const hasil = angka1 + angka2
    return hasil
}

const hasilProcedure = hello('ilham')
const hasilFunction = hitungPenjumlahan(10, 10)
console.log('hasilProcedure', hasilProcedure)
console.log('hasilFunction', hasilFunction)
