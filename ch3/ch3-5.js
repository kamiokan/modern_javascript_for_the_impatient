const constructCounter = (initial, increment = 1) => {
    let current = initial
    let i = 0
    return {
        count: () => {
            current += increment * i
            i++
            return current
        }
    }
}

const myFirstCounter = constructCounter(0, 2)
console.log(myFirstCounter.count())
console.log(myFirstCounter.count())

const mySecondCounter = constructCounter(0)
console.log(mySecondCounter.count())
console.log(mySecondCounter.count())
