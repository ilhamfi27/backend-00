let wadah = ['air', 'beras', 'gula', 'garam', 10, true];
console.log(wadah[0]); // data pertama
console.log(wadah[wadah.length - 1]); // data terakhir
console.log(wadah.length) // dapetin panjang array
console.log('================');
console.log('push array');
wadah.push('asem', 'merica')
console.log(wadah.length) // dapetin panjang array
console.log(wadah)
console.log('================');
console.log('ganti data array');
wadah[0] = 'lengkuas'
wadah[2] = 'lada hitam'
console.log(wadah)
console.log('================');
console.log('ganti data array');
delete wadah[5]
console.log(wadah)
console.log(wadah.length)
console.log('================');
console.log('push dari depan');
wadah.unshift('apel')
console.log(wadah)
