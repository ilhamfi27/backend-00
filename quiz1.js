let a = 15,
    b = 20,
    c = 5,
    d = 10;

if (a < b) {
    a = a + 5;
}
if (a + b < d) {
    c = c + 5;
}
if (c > d) {
    c = c + d;
}
if (a != d) {
    b = a + c;
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)
