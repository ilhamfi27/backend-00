function jumlahPromise(a, b) {
    const p = new Promise((resolve, reject) => {
        if (typeof a != 'number' || typeof b != 'number') {
            reject('ada angka tapi bukan number');
        } else {
            resolve(a + b);
        }
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
    })
    .finally(() => {
        console.log('done, and always executed');
    });
