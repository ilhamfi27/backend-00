let cuaca = 'cerah';
let adaSepatuHitam = true;
if (cuaca == 'cerah') {
    console.log('pergi ke toko sepatu');
    if (adaSepatuHitam) {
        console.log('pulang bawa sepatu hitam');
    } else {
        console.log('pulang bawa sepatu putih');
    }
} else {
    console.log('buka toko online');
    if (!adaSepatuHitam) {
        console.log('gak ada sepatu hitam');
        console.log('beli kaus kaki putih');
    } else {
        console.log('ada sepatu hitam');
    }
    console.log('checkout sepatu');
}
