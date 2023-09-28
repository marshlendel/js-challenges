function findMaxNumber(arr) {
    // let max = null;
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] > max) {
    //         max = arr[i]
    //     }
    // }
    // return max

    return Math.max(...arr)
}

module.exports = findMaxNumber;
