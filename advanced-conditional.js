let a = -10,
    b = -10,
    c = -1;

// multi condition
if (a > 0 || b > 0 || c > 0) {
    console.log('ada yang positive');
} else {
    console.log('gak ada yang positive');
}

// undefined checking
let variableUndefined = undefined;
let variableNull = null;
let variableKosong = '';
let arr = [];

if (variableUndefined) {
    console.log('variableUndefined tidak Undefined');
} else {
    console.log('variableUndefined Undefined');
}
if (variableNull) {
    console.log('variableNull tidak Null');
} else {
    console.log('variableNull Null');
}
if (variableKosong) {
    console.log('variableKosong tidak Kosong');
} else {
    console.log('variableKosong Kosong');
}
if (arr.length) {
    console.log('array tidak Kosong');
} else {
    console.log('array Kosong');
}

// ternary operator
a = 0;
let hasil = a > 0 
    ? (
        a % 2 == 0 
        ? 'genap'
        : 'ganjil'
    )
    : 'a lebih kecil dari 0';
console.log(hasil);

if (a > 0) {
    if (a % 2 == 0) {
        hasil = 'genap';
    } else {
        hasil = 'ganjil';
    }
} else {
    hasil = 'a lebih kecil dari 0';
}
console.log(hasil);


