/**
given 2 arrays [1,2,3,4,5,6,7] and [5,6,7,8,9,10]
outputkan nilai yang sama
*/
const arr1 = [1, 2, 3, 4, 5, 6, 7, 10];
const arr2 = [5, 6, 7, 8, 9, 10, 1];
const result = [];
for (const arr1Val of arr1) {
    for (const arr2Val of arr2) {
        if (arr1Val === arr2Val) {
            result.push(arr1Val);
        }
    }
}
console.log(result);
