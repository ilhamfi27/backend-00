class Rectangle {
    width;
    height;
    color;

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.color = 'merah';
        console.log('aku dipanggil pertama!', width, height);
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * this.width + 2 * this.height;
    }

    isSquare() {
        let square = false;
        if (this.height === this.width) {
            square = true;
        }
        return square;
    }
}

const kotak1 = new Rectangle(10, 10);
const kotak1Area = kotak1.area();
const kotak1Perimeter = kotak1.perimeter();
const kotak1IsSquare = kotak1.isSquare();
console.log('area', kotak1Area);
console.log('perimeter', kotak1Perimeter);
console.log('is square', kotak1IsSquare);

console.log('===================================================');

const kotak2 = new Rectangle(5, 10);
const kotak2Area = kotak2.area();
const kotak2Perimeter = kotak2.perimeter();
const kotak2IsSquare = kotak2.isSquare();
console.log('area', kotak2Area);
console.log('perimeter', kotak2Perimeter);
console.log('is square', kotak2IsSquare);

console.log('===================================================');

const kotak3 = new Rectangle(20, 100);
const kotak3Area = kotak3.area();
const kotak3Perimeter = kotak3.perimeter();
const kotak3IsSquare = kotak3.isSquare();
console.log('area', kotak3Area);
console.log('perimeter', kotak3Perimeter);
console.log('is square', kotak3IsSquare);
