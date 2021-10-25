//with Kaite Griffith

const vowels = ["a", "e", "i", "o", "u"] 
const hasMoreVowels = (word) => {
let vowelCount = 0;
for (let letter of word.toLowerCase()){
    if (vowels.includes(letter)){
        vowelCount++;
    }
}
if (vowelCount > word.length / 2){
    return true
} else {
    return false
}
}


// const hasMoreVowels = (word) => {
//     const vowelCount = word.match(/[aeiou]/gi).length;  //"gi" modifier to do a case insensitive search for all the occurrences of the regular expression in a string using a string object.
// if (vowelCount > word.length / 2){
//     return true
// } else {
//     return false
// }
// }




console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('an'))
console.log(hasMoreVowels('ann'))
console.log(hasMoreVowels('graph'))
console.log(hasMoreVowels('yay'))
console.log(hasMoreVowels('Aal'))



// The g and i modifiers have these meanings:

// g = global, match all instances of the pattern in a string, not just one
// i = case-insensitive (so, for example, /a/i will match the string "a" or "A".