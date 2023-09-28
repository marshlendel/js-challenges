function countOccurrences(string, char) {
    return string.split("").filter(letter => letter === char).length

    // let occurrences = 0;
    // for(let i = 0; i < string.length; i++) {
    //     if(string[i] === char) {
    //         occurrences++
    //     }
    // }
    // return occurrences

    // for (const letter of string) {
    //     if(letter === char) {
    //         occurrences++
    //     }
    // }
    // return occurrences
}

module.exports = countOccurrences;
