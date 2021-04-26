// Code your solution here
function findMatching(array, string) {
    let res = array.filter(name =>  name.toLowerCase() === string.toLowerCase() || name.toLowerCase() === string.toLowerCase())
    return res;
}

function fuzzyMatch(array, string) {
    let res = array.filter(name => name.substring(0,1) === string.substring(0,1))
    return res
}

function matchName(array, string) {
    let res = array.filter(name => name.name === string)
    return res
}