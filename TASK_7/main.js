let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'd', null, 'e'];
let countEven = 0;
let countOdd = 0;
let countOther = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        countOther++;
    } else {
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}

console.log(" Четное " + countEven);
console.log(" Нечетное " + countOdd);
console.log(" Другое " + countOther);