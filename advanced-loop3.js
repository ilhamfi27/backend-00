/**
given 2 arrays [1,2,3] and [4,5]
outputkan kemungkinan sebuah pasangan dari list tersebut
contoh:
1,4
1,5
2,4
2,5
3,4
3,5
*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

for (const arr1Val of arr1) {
    for (const arr2Val of arr2) {
        console.log(`${arr1Val}, ${arr2Val}`);
    }
}
