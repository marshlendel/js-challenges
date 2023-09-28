function countVowels(string) {
    return string.toLowerCase().split(/[aeiou]/).length - 1
}

module.exports = countVowels;
