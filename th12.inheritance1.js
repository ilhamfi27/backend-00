/**
 * Soal 1
- Buatlah sebuah class dengan nama Shape, dengan property numSides untuk menyimpan jumlah sisi, dan sideLengths untuk menyimpan panjang sisi. Class ini akan memiliki method getNumSides() untuk mengambil jumlah sisi, getSideLengths() untuk mengambil data panjang sisinya, dan getPerimeter() untuk mengambil luasnya.
- Buatlah class Triangle, Rectangle dan Circle yang semuanya adalah class turunan dari class Shape dan dari masing - masing class ada method getArea() untuk mengambil luasnya.
 * 
 */

class Shape {
    numSides;
    sideLengths;

    getNumSides() {
        return this.numSides;
    }
    getSideLengths() {
        return this.sideLengths;
    }
    getPerimeter() {
        return this.numSides * this.sideLengths;
    }
}

class Triangle extends Shape {
    numSides = 3;

    constructor(sideLengths = 1) {
        super();
        this.sideLengths = sideLengths;
    }

    getArea() {
        const tinggi = Math.sqrt(this.numSides ** 2 - (this.numSides / 2) ** 2);
        return (this.numSides / 2) * tinggi;
    }
}
class Rectangle extends Shape {
    numSides = 4;

    constructor(sideLengths = 1) {
        super();
        this.sideLengths = sideLengths;
    }

    getArea() {
        return this.sideLengths ** 2;
    }
}
class Circle extends Shape {
    numSides = 1;
    PHI = Math.PI;

    constructor(sideLengths = 1) {
        super();
        this.sideLengths = sideLengths;
    }

    getArea() {
        return this.PHI * (this.sideLengths / 2) ** 2;
    }

    getPerimeter() {
        return  this.PHI * this.sideLengths * 2;
    }
}

const segitiga = new Triangle(10)
console.log('segitiga.getArea()', segitiga.getArea())
console.log('segitiga.getNumSides()', segitiga.getNumSides())
console.log('segitiga.getSideLengths()', segitiga.getSideLengths())
console.log('segitiga.getPerimeter()', segitiga.getPerimeter())
const bulat = new Circle(10)
console.log('bulat.getArea()', bulat.getArea())
console.log('bulat.getNumSides()', bulat.getNumSides())
console.log('bulat.getSideLengths()', bulat.getSideLengths())
console.log('bulat.getPerimeter()', bulat.getPerimeter())
