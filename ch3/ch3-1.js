function indexOf(arr, value) {
    for (let i in arr) {
        if (arr[i] === value) return i
    }
    return -1
}

indexOf({name: 'kamioka', age: 43}, 'kamioka')
