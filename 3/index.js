const input = require('./data')
const splitRegex = /[\r\n]+/
const splitArray = input.split(splitRegex)
const charArray = splitArray.map(line => [...line])

function mostCommonElement(array) {
    const obj = {}
    array.forEach(element => obj[element] = obj[element] ? obj[element] + 1 : 1)
    return obj['0'] > obj['1'] ? '0' : '1'
}

function removeWrongValues(arr) {
    const ratingsObj = {}
    const ratings = (arr, mostCommon) => {
        let lengthArr = createLengthArray(arr)
        for(let i = 0; i < lengthArr.length; i++) {
            if (arr.length <= 1) break
            const commonElement = mostCommonElement(lengthArr[i])
            arr = arr.filter(arrElement => mostCommon ? arrElement[i] === commonElement : arrElement[i] !== commonElement )
            lengthArr = createLengthArray(arr)
        }
        return arr[0]
    }
    ratingsObj['oxygenRating'] = ratings(arr, true)
    ratingsObj['co2Rating'] = ratings(arr, false)
    return ratingsObj
}

function createLengthArray(data) {
    const lengthArr = Array.from(new Array(data[0].length), () => [])
    for(let i = 0; i < data[0].length ?? 0; i++) {
        for(let j = 0; j < data.length; j++) {
            lengthArr[i][j] = data[j][i]
        }
    } // create array length wise from strings
    return lengthArr
}

function partOne(data) {
    const lengthArr = createLengthArray(data)
    const mostCommonArr = lengthArr.map(line => mostCommonElement(line))
    const gamma = parseInt(mostCommonArr.join(''), 2)
    const epsilon = parseInt(mostCommonArr.map(element => element === '1' ? '0' : '1').join(''), 2)
    return gamma * epsilon
}

function partTwo(data) {
    const lengthArr = createLengthArray(data)
    const correctValues = removeWrongValues(data, lengthArr)
    parseInt(correctValues['oxygenRating'].join(''), 2)
    parseInt(correctValues['co2Rating'].join(''), 2)
    const oxygenRating = parseInt(correctValues['oxygenRating'].join(''), 2)
    const co2Rating = parseInt(correctValues['co2Rating'].join(''), 2)
    return oxygenRating * co2Rating
}

console.log(`Part One: ${partOne(charArray)}`)
console.log(`Part Two: ${partTwo(charArray)}`)