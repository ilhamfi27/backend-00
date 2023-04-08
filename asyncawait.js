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

async function execAsyncAwait() {
    // function promise
    try {
        let hasil = await jumlahPromise(10, 20);
        hasil = await jumlahPromise(hasil, 30);
        hasil = await jumlahPromise(hasil, 40);
        hasil = await jumlahPromise(hasil, 50);
        return hasil;
    } catch (error) {
        console.log(error);
    } finally {
        console.log('done, and always executed');
    }
}

async function main() {
    const hasil = await execAsyncAwait();
    console.log(hasil);
}
