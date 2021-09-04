function arrayMapping (arr, value = 1) {
    let newArray = []
    if (typeof arr[0] === 'string') {
        arr.forEach ( item => newArray.push(item) )
    } else {
        arr.forEach ( item => newArray.push(value * item) )
    }
    return newArray
}

function mapToNegativize (arr) {
    return arrayMapping(arr, -1)
}

function mapToNoChange (arr) {
    return arrayMapping(arr)
}

function mapToDouble (arr) {
    return arrayMapping(arr, 2)
}

function mapToSquare (arr) {
    let newArray = []
    arr.forEach ( item => newArray.push(item * item) )
    return newArray
}

function reduceToTotal (arr, start=0) {
    let total = start
    arr.forEach ( item => total += item )
    return total
}

function reduceToAllTrue (arr) {
    let status = true
    arr.forEach ( item => status = status && Boolean(item) )
    return status
}

function reduceToAnyTrue (arr) {
    let status = false
    arr.forEach ( item => status = status || Boolean(item) )
    return status
}