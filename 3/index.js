const input = require('./data')
const splitRegex = /[\r\n]+/
const splitArray = input.split(splitRegex)
const charArray = splitArray.map(line => [...line])

function mostCommonElement(array) {
    const obj = {}
    array.forEach(element => obj[element] = obj[element] ? obj[element] + 1 : 1)
    return obj['0'] > obj['1'] ? '0' : '1'
}

function partOne(data) {
    const lengthArr = Array.from(new Array(data[0].length), () => [])
    for(let i = 0; i < data[0].length; i++) {
        for(let j = 0; j < data.length; j++) {
            lengthArr[i][j] = data[j][i]
        }
    } // create array length wise from strings
    const mostCommonArr = lengthArr.map(line => mostCommonElement(line))
    const gamma = parseInt(mostCommonArr.join(''), 2)
    const epsilon = parseInt(mostCommonArr.map(element => element === '1' ? '0' : '1').join(''), 2)
    return gamma * epsilon
}

function partTwo(data) {
    
}

console.log(`Part One: ${partOne(charArray)}`)
console.log(`Part Two: ${partTwo(charArray)}`)