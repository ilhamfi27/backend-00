/**
Soal 2
- Buatlah sebuah class untuk menyimpan data seseorang dan minimal dapat menyimpan nama, NIK dan jenis kelamin. Terdapat incapsulation pada class ini, jadi property yang harus di set dan diambil melalui methods. Kemudian buat 2 class turunan seperti berikut:
1. class Employee yang akan menyimpan data pekerjaan dan salary.
2. class Student yang akan menyimpan data kampus serta jurusan dimana dia belajar.
 */

class Person {
    nama;
    NIK;
    gender;
    setNama(nama) {
        this.nama = nama;
    }
    setNIK(NIK) {
        this.NIK = NIK;
    }
    setGender(gender) {
        this.gender = gender;
    }
    getNama() {
        return this.nama;
    }
    getNIK() {
        return this.NIK;
    }
    getGender() {
        return this.gender;
    }
}

class Employee extends Person {
    title;
    salary;

    constructor(nama, nik, gender, title, salary) {
        super();
        this.title = title;
        this.salary = salary;
        this.nama = nama;
        this.NIK = nik;
        this.gender = gender;
    }

    getData() {
        return {
            nama: this.getNama(),
            NIK: this.getNIK(),
            gender: this.getGender(),
            salary: this.salary,
            title: this.title,
        };
    }
}

class Student extends Person {
    campus;
    major;

    constructor(nama, nik, gender, campus, major) {
        super();
        this.campus = campus;
        this.major = major;
        this.nama = nama;
        this.NIK = nik;
        this.gender = gender;
    }

    getData() {
        return {
            nama: this.getNama(),
            NIK: this.getNIK(),
            gender: this.getGender(),
            campus: this.campus,
            major: this.major,
        };
    }
}
const e = new Employee('ilham', '2301170137', 'L', 'programmer', 20000);
console.log(e.getData());
const s = new Student('ilham', '2301170137', 'L', 'Telkom', 'Informasi Teknologi');
console.log(s.getData());
