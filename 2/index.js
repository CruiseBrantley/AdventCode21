const input = require('./data')
const splitRegex = /[\r\n]+/
const splitArray = input.split(splitRegex)

function partOne(data) {
    let horizontal = 0
    let depth = 0

    data.forEach(line => {
        const splitData = line.split(' ')
        splitData[1] = parseInt(splitData[1])
        switch (splitData[0]) {
            case 'forward':
                horizontal += splitData[1]
                break
            case 'up':
                depth -= splitData[1]
                break
            case 'down':
                depth += splitData[1]
                break
        }
    })
    return horizontal * depth
}

function partTwo(data) {
    let horizontal = 0
    let depth = 0
    let aim = 0

    data.forEach(line => {
        const splitData = line.split(' ')
        splitData[1] = parseInt(splitData[1])
        switch (splitData[0]) {
            case 'forward':
                horizontal += splitData[1]
                depth += (splitData[1] * aim)
                break
            case 'up':
                aim -= splitData[1]
                break
            case 'down':
                aim += splitData[1]
                break
        }
    })
    return horizontal * depth
}

console.log(`Part One: ${partOne(splitArray)}`)
console.log(`Part Two: ${partTwo(splitArray)}`)