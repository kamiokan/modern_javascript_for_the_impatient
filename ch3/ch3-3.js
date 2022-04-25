const values = (f, low, high) => {
    result = []
    for (let i = low; i <= high; i++) {
        result.push(f(i))
    }
    return result
}

const f = (v) => {
    return v * 2
}

console.log(values(f, 23, 100))

// map関数を使うパターン
const values2 = (f, low, high) => {
    result = []
    for (let i = low; i <= high; i++) {
        result.push(i)
    }
    return result.map((x) => {
        return f(x)
    })
}

console.log(values2(f, 23, 100))
