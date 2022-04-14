const array = [-1, 256, 30, 512, 88];

// 古典的なforループ
let max = 0;
for (let i = 0; i <= array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
}
console.log(max);

// for ofループ
max = 0;
for (const element of array) {
    if (max < element) {
        max = element;
    }
}
console.log(max);

// for inループ
max = 0;
for (const index in array) {
    if (max < array[index]) {
        max = array[index];
    }
}
console.log(max);
