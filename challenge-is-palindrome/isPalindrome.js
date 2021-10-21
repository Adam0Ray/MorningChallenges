// Write your code below
// return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true

// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// isPalindrom("Racecar")
// // returns false

// isPalindrom("racecar")
// // returns true

const isPalindrome = (word) => {
    let x = word.length - 1                                        // x = starts at the end (last index)
    for (let i = 0; i < (word.length - 1) / 2; i++) {              //i start at 0; i goes until the last index /2(splitting palindrome) ; iterate i forward
      if (word[i] !== word[x]) {                                   // word at index i not equal to word at index x
        return false
      }
      x--
    }
    return true
  }

console.log(isPalindrome('a'))
console.log(isPalindrome('noon'))
console.log(isPalindrome('hello'))
console.log(isPalindrome('Racecar'))
console.log(isPalindrome('racecar'))

//not working yet
// const isPalindrome = (word) =>{
//     for(let i = 0;i < (word.length - 1) / 2; i++){              //first for loop over i
//         for(let x = word.length-1; x <= (word.length-1); x--){    //second loop comparing the first index in loop to next index in loop+1 and subtracting one from length to account for the +1
//         if (word[i] !== word[x]){             //comparing par[i] at first index to par[x] at the next index from the first for loop
//             return false;
//         }
//     } 
// }              
// return true;
// }
// console.log(isPalindrome('a'))
// console.log(isPalindrome('noon'))
// console.log(isPalindrome('hello'))
// console.log(isPalindrome('Racecar'))
// console.log(isPalindrome('racecar'))


// //not working yet
// let arr = []
// function isPalindrome(arr) {
//     for(i = arr.length; i >= 0; i--){
//         let newArr = []
//         newArr.push(arr(i));
//     } 
//     if ( newArr !== arr){
//     return true
//     } else {
//     return false
//     }
// }

// console.log(isPalindrome())