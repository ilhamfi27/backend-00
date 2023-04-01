/*
    bikin loop sampe 1000
    kalau misal ketemu angka yang habis dibagi 3 outputkan => fizz
    kalau misal ketemu angka yang habis dibagi 5 outputkan => buzz
    kalau misal ketemu angka yang habis dibagi 3 dan 5 outputkan => fizzbuzz
    selain itu, outputkan angkanya
*/

const batas = 1000
for (let i = 1; i <= batas; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // angka yang habis dibagi 3
        console.log('fizzbuzz');
    } else if (i % 3 === 0) { // angka yang habis dibagi 5
        console.log('fizz');
    } else if (i % 5 === 0) { // angka yang habis dibagi 3 dan 5
        console.log('buzz');
    } else { 
        console.log(i);
    }
}

for (let i = 1; i <= batas; i++) {
    let hasil = i % 3 === 0 
        ? 'fizz' : 
            i % 5 === 0 ? 'buzz' 
        : i;
    hasil = i % 3 === 0 && i % 5 === 0 ? 'fizzbuzz' : hasil
    console.log(hasil);
}
