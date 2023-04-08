try {
    setName('ilham')
    setName(1233456)
} catch (e) {
    console.log('e.message', e.message);
    console.log('e.name', e.name);
    console.log('e.trace', e.stack);
} finally {
    console.log('semua selesai');
}

function setName(name) {
    if (typeof name != 'string') {
        throw new Error('Nama haruslah string')
    }
    console.log('hallo', name)
}

