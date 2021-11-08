// Write your solution below:

const tshirtSorter = (string) =>{
return string.split("").sort().reverse().join("")  //sort elements in array in aplphabetical order, split string, then sort the splitted strings, reverse the order from lms to sml, join the string back together

}

console.log(tshirtSorter('lms'))
console.log(tshirtSorter('smllms'))


function tshirtSorter2(string) {
    let small = ""                      //blank string
    let medium = ""
    let large = ""
    for (let i = 0; i < string.length; i++) {       //loop
      if (string[i] === "s") {             //index i add s to small string
        small += "s"
      } else if (string[i] === "m") {        //index m add s to medium string
        medium += "m"
      } else {                            //else add l to large string
        large += "l"
      }
    }
    return small + medium + large         //return the three strings in the order sml
  }

console.log(tshirtSorter2('lms'))
console.log(tshirtSorter2('smllms'))