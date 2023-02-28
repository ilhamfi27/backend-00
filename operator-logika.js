console.log('operator logika');

let nilai1 = 5 > 6 // false
let nilai2 = 7 > 6 // true
let nilai3 = !nilai2
console.log('nilai3', nilai3);
let hasilAkhir = nilai1 && nilai2 && nilai3
console.log(hasilAkhir);
hasilAkhir = nilai1 || nilai2 || nilai3 // true
console.log(hasilAkhir);
