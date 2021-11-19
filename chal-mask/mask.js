function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }
  
  cc = cc.join("");
  return cc
  }

  console.log(maskify("4556364607935616"))
  console.log(maskify('Skippy'))
  console.log(maskify("1"))
  console.log(maskify('')) 

// const maskify = (cc) => {
//     if (cc.length>4){
//         let reversed = reverse(cc)
//         let newString = ''
//         for (let i = 0; i <reversed.length; i++) {
//             if(i < 4){
//                 newstring =+reversed[i]
//             } else {
//                 newstring += '#'
//             }
//         }
//         return reverse(newString)
//     } else {
//         return cc
//     }
// }

// function reverse(str) {
//     return str.split("").reverse().join("");
//   }

//   console.log(maskify('Skippy'))