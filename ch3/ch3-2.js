function indexOf(arr, value) {
    let result = -1;
    for (let i in arr) {
        if (arr[i] === value) result = i
    }
    return result
}

indexOf([1, 2, 3, 4, 5, 256], 256)
