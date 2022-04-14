let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
for (const i in arr) {
    if (Number(i) + 1 === 10) console.log(arr[i]);
}

// 変数iがstring型のため厳密な比較でfalseになる。iをnumber型にキャストした
// ifブロック内の a[i] を arr[i] に修正した
