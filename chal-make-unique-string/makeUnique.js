// Write your solution below:
let makeUnique = (code) => {                   //create function
let solution = new Set(code.split(""))         //set variable equal to a new set that is a split array
return [...solution].join("")                  //return the split solution and join

}
  console.log(makeUnique('helloworld'))


// function makeUnique(str) {
//     let uniqueStr = ""                               //setting blank string for future use
//     for (let i = 0; i < str.length; i++) {           //looping through i
//       if (uniqueStr.includes(str[i])) {               //if the blank string includes the index in the callback
//         continue                                      //continue if true
//       } else {
//         uniqueStr += str[i]                           //else add the callback at i to the blank string
//       }
//     }
//     return uniqueStr                                 //return the filtered string
//   }
// console.log(makeUnique('helloworld'))