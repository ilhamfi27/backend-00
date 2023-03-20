/**
2. Buat sebuah class dengan nama Student. Class ini akan menyimpan nama, NIM dan daftar nilai (disimpan dalam array) dari seorang mahasiswa. Di class ini juga dapat melakukan
    1) penambahaan data nilai baru ke dalam daftar nilai
    2) mengambil nilai rata rata dari daftar nilai, dan
    3) menentukan predikat (A, B+, B, C+, C, D, E).
*/

class Student {
    nama = '';
    nim = '';
    daftarNilai = [];

    constructor(nama, nim) {
        this.nama = nama;
        this.nim = nim;
    }

    addNilai(nilai) {
        this.daftarNilai.push(nilai);
    }

    getRata2Nilai() {
        let totalNilai = 0;
        for (let i = 0; i < this.daftarNilai.length; i++) {
            const nilai = this.daftarNilai[i];
            totalNilai = totalNilai + nilai;
        }

        return totalNilai / this.daftarNilai.length;
    }

    getPredikatNilaiRata2() {
        const nilaiAkhir = this.getRata2Nilai(); // ngambil rata2 nilai
        let predikat = 'E';
        if (nilaiAkhir >= 90) {
            predikat = 'A';
        } else if (nilaiAkhir >= 85) {
            predikat = 'B+';
        } else if (nilaiAkhir >= 80) {
            predikat = 'B';
        } else if (nilaiAkhir >= 75) {
            predikat = 'C+';
        } else if (nilaiAkhir >= 70) {
            predikat = 'C';
        } else if (nilaiAkhir >= 65) {
            predikat = 'D';
        } else {
            predikat = 'E';
        }

        return predikat;
    }

    getReport() {
        console.log('nama mahasiswa', this.nama);
        console.log('nim mahasiswa', this.nim);
        console.log('nilai akhir mahasiswa', this.getRata2Nilai());
        console.log('predikat mahasiswa', this.getPredikatNilaiRata2());
    }
}

const ilham = new Student('Ilham', '2301170137');
