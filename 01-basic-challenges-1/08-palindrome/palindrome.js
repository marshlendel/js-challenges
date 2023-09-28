function isPalindrome(string) {
    let filteredString = string.toLowerCase().replace(/[^a-z0-9]/g, "")
    if(filteredString.length === 0 || filteredString.length === 1) return true
    if(filteredString.length === 2) return filteredString[0] === filteredString[1]
    if(filteredString[0] !== filteredString.at(-1)) return false
    return isPalindrome(filteredString.slice(1, -1))
    // return filteredString === filteredString.split("").reverse().join("")
}

module.exports = isPalindrome;
