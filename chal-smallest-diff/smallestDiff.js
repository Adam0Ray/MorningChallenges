
let smallestDiff = (arrOne, arrTwo) =>{
    arrOne = arrOne.sort((a, b) => a - b)  //sort arr1
    arrTwo = arrTwo.sort((a, b) => a - b)  //sort arr2

    let best = null

    let indexOne = 0
    let indexTwo = 0

    while (indexOne < arrOne.length && indexTwo < arrTwo.length) {
        let diff = arrOne[indexOne] - arrTwo[indexTwo]

        if (diff === 0) {
            return 0
        }

        if (best === null || diff < best) {
            best = diff
        }

        if (arrOne[indexOne] > arrTwo[indexTwo]) {
            indexTwo++
        } else {
            indexOne++
        }
    }

    return best
}

let x = [30, 23, 54, 33, 96]
let y = [10, 20, 14, 16, 18]

console.log(smallestDiff(x,y))  //returns 3