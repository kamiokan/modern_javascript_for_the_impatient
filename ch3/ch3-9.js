'use strict'

const mkString = (array, {
    separator = ',',
    leftDelimiter = '[',
    rightDelimiter = ']'
} = {}) => {
    let elements = leftDelimiter + ''
    for (const arrayElement of array) {
        elements += arrayElement + separator
    }
    return elements + rightDelimiter
}

const persons = ['近藤勇', '土方歳三', '斎藤一', '沖田総司']
console.log(mkString(persons))
console.log(mkString(persons, {
    separator: '=>ズッ友=>',
    leftDelimiter: '新撰組@{',
    rightDelimiter: '}@京都'
}))
