let nama, kampus, jurusan;

function setData(_nama, _kampus, _jurusan) {
  nama = _nama;
  kampus = _kampus;
  jurusan = _jurusan;
}

function getData() {
  return `${nama} - ${kampus} - ${jurusan}`;
}

setData('Ilham', 'Telkom', 'SI');

console.log(getData());
