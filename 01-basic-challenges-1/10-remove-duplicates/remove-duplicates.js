function removeDuplicates(arr) {
    // let result = []
    // for(let i = 0; i < arr.length; i++) {
    //     if(!result.includes(arr[i])) {
    //         result.push(arr[i])
    //     }
    // }
    // return result
    return Array.from(new Set(arr))
}

module.exports = removeDuplicates;
