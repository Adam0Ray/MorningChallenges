// Write your code below this line
// With Icarus Romero
const decoder = (code) =>{

    let shiftNumber = Number(code[0])                      //assigning the first index to a number
    let newCode = ''

    for(let i = 1; i <code.length; i++){                        //looping only through letters
        let shiftLetter = code[i].charCodeAt() + shiftNumber   //assign shiftLetter to the unicode of the character at index i + the number to shift
        newCode += String.fromCharCode(shiftLetter)            // newCode(our solution) adds the string stored from the previous line throughout the loop
    }
    return newCode
}
console.log(decoder("2fcjjm"))
console.log(decoder("1a"))

//The charCodeAt() method returns the Unicode of the character at the specified index in a string
//The String.fromCharCode() method converts Unicode values to characters.

