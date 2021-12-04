const input = require('./data')
const splitRegex = /[\r\n]+/
const splitArray = input.split(splitRegex)
const charArray = splitArray.map(line => [...line])

function mostCommonElement(array) {
    // console.log('line:', array)
    const obj = {}
    array.forEach(element => obj[element] = obj[element] ? obj[element] + 1 : 1)
    // console.log(obj)
}

function partOne(data) {
    const lengthArr = new Array(data.length).fill(new Array())
    for(let i = 0; i < data[0].length; i++) {
        
        for(let j = 0; j < data.length; j++) {
            console.log(j, i, data[j][i])
            lengthArr[i][j] = data[j][i]
        }
        // for(let i = 0; i < charArr.length; i++) {
        //     lengthArr[i][index] = charArr[i]
        // }
    } // create array length wise from strings
    console.log(lengthArr)
    // const mostCommonArr = lengthArr.map(line => mostCommonElement(line))
    // console.log(mostCommonArr)
}

function partTwo(data) {
    
}

console.log(`Part One: ${partOne(charArray)}`)
console.log(`Part Two: ${partTwo(charArray)}`)