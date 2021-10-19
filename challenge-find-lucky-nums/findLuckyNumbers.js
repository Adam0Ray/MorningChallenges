// Given a number, n, 
//return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)
// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)  n would be 2 random numbers
// // returns (3, 7)
// luckyNumbers(6) n would be 6 random numbers
// // returns (1, 7, 9, 6, 5, 2)  

// Write your code below this line.
function generateLuckyNums(n){
let nums = [1,2,3,4,5,6,7,8,9,10]  //numbers that will be looped through
let luckyNums = []   //blank array
for (let i = 0; i < n; i++ ){  //loops through
    let x = Math.floor(Math.random() * nums.length); //generates a random number between >0 & 10
    luckyNums.push(nums[x])  //pushes the value into the blank luckyNums array
    nums.splice(x, 1)   //gets rid of repeat
}
return luckyNums  //returns the previously blank array LuckyNums that will now have values
}
console.log(generateLuckyNums(9))
