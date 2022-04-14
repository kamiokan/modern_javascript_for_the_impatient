// switchを使った場合
const convertNumberToCharacter = (number) => {
    switch (number) {
        case 0:
            number = 'zero';
            break;
        case 1:
            number = 'one';
            break;
        case 2:
            number = 'two';
            break;
        case 3:
            number = 'three';
            break;
        case 4:
            number = 'four';
            break;
        case 5:
            number = 'five';
            break;
        case 6:
            number = 'six';
            break;
        case 7:
            number = 'seven';
            break;
        case 8:
            number = 'eight';
            break;
        case 9:
            number = 'nine';
            break;
    }
    return number;
}

// 配列を使った場合
const convertNumberToCharacter2 = (number) => {
    const numberToCharacter = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return numberToCharacter[number];
}

// 検証
console.log(convertNumberToCharacter(4));
console.log(convertNumberToCharacter2(7));


// 逆の変換
// switchを使った場合
const convertCharacterToNumber = (character) => {
    switch (character) {
        case 'zero':
            character = 0;
            break;
        case 'one':
            character = 1;
            break;
        case 'two':
            character = 2;
            break;
        case 'three':
            character = 3;
            break;
        case 'four':
            character = 4;
            break;
        case 'five':
            character = 5;
            break;
        case 'six':
            character = 6;
            break;
        case 'seven':
            character = 7;
            break;
        case 'eight':
            character = 8;
            break;
        case 'nine':
            character = 9;
            break;
    }
    return character;
}

// オブジェクトを使った場合
const convertCharacterToNumber2 = (character) => {
    const characterToNumber = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9,
    };
    return characterToNumber[character];
}

// 検証
console.log(convertCharacterToNumber('four'));
console.log(convertCharacterToNumber2('seven'));
