'use strict'

const average = (first = 0, ...following) => {
    let sum = first
    for (const value of following) {
        sum += value
    }
    return sum / (1 + following.length)
}

console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15))
