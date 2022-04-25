let numbers = [4, 2, 5, 1, 3]
numbers.sort((x, y) => y - x)
console.log(numbers)

let people = [100, 18, 3, 21, 43]
people.sort((x, y) => x - y)
console.log(people)

let characters = ['dragonball', 'キングダム', '東京卍リベンジャーズ', '呪術廻戦', 'こちら葛飾区亀有公園前派出所']
characters.sort((x, y) => x.length - y.length)
console.log(characters)
