const input = require('./data')
const splitRegex = /[\r\n]+/
const splitArray = input.split(splitRegex)

function partOne(data) {
    let current = 0
    let increases = 0

    data.forEach((line, index) => {
        if (index > 0 && Number(line) > current ) increases++
        current = Number(line)
    })
    return increases
}

function partTwo(data) {
    const current = [0]
    let increases = 0

    function stepArray(newElement) {
        if (current.length > 2) current.pop()
        current.unshift(newElement)
    }

    function sumArray() {
        return current.reduce((acc, cur) => acc + cur)
    }

    data.forEach((line, index) => {
        const beforeStep = sumArray()
        stepArray(Number(line))
        if (index > 2 && beforeStep < sumArray()) increases++
    })
    return increases
}

console.log(`Part 1: The number of increases is ${partOne(splitArray)}.`)
console.log(`Part 2: The number of increases is ${partTwo(splitArray)}.`)