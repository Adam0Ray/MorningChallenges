const decoder = (code) => {
let splitCode = code.split('') //The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
let newCode = ''
    for(i = 0; i <splitCode.length; i++){    //basic loop on splitCode which is split into substrings
    if (!isNaN(+splitCode[i])){          // if the numeric value of splitCode[i] is a number aka(not[!] not a number[NaN])
        i += +splitCode[i]               // add to index i, the numeric value of i (The + operator returns the numeric representation of the object.)
    } else {
            newCode += splitCode[i]          //newCode add value of splitcode(the split string) at index i
            }
    }
return newCode        
}


console.log(decoder('0h2xce5ngbrdy')) //logs hey
console.log(decoder('3vdfn'))         //logs n