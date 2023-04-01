const batas = 10;
for (let outer = 0; outer < batas; outer++) {
    let str = '';
    for (let inner = 0; inner < batas; inner++) {
        str += inner <= outer ? '*' : '+';
    }
    console.log(str + ' ' + outer);
}
str = '';
for (let inner = 0; inner < batas; inner++) {
    str += inner;
}
console.log(str);
