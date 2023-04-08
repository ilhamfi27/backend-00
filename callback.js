function jumlah(a, b, hasil) {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            hasil('ada angka tapi bukan number', null);
        } else {
            hasil(null, a + b);
        }
    }, 0);
}
// 10 + 20 + 30 + 40 + 50 + 60
let hasilPenjumlahan = 0;
// callback hell
jumlah(10, 20, function (err, result) {
    if (err) {
        console.log(err);
    } else 
    jumlah(result, 30, function (err, result1) {
        if (err) {
            console.log(err);
        } else 
        jumlah(result1, '40', function (err, result2) {
            if (err) {
                console.log(err);
            } else 
            jumlah(result2, 50, function (err, result3) {
                if (err) {
                    console.log(err);
                } else 
                jumlah(result3, 60, function (err, result4) {
                    if (err) {
                        console.log(err);
                    } else 
                    console.log(result4);
                });
            });
        });
    });
});
