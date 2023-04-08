function jumlah(a, b, hasil) {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            hasil('ada angka tapi bukan number', null);
        } else {
            hasil(null, a + b);
        }
    }, 0);
}
function jumlahPromise(a, b) {
    const p = new Promise((resolve, reject) => {
        jumlah(a, b, function (err, hasil) {
            if (err) {
                reject(err);
            } else {
                resolve(hasil);
            }
        });
    });
    return p;
}
jumlahPromise(10, 20)
    .then(function (d) {
        return jumlahPromise(d, 30);
    })
    .then(function (d) {
        return jumlahPromise(d, 40);
    })
    .then(function (d) {
        return jumlahPromise(d, 50);
    })
    .then(function (d) {
        console.log('hasilnya', d);
    })
    .catch(function (err) {
        console.log(err);
    });