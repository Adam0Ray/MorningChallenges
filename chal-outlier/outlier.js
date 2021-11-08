// You are given an array (which will have a length of at least 3, 
//but could be very large) containing integers. 
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
//Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)



let outlier = (integers) =>{
    let even = []                                    //blank array inside function
    let odd = []                                     //blank array inside function
    for (let i = 0; i < integers.length; i++){       //loop through callback
        let num = integers[i]                        //set cariable to the index in the loop
        if(num % 2 === 0){                           //if even
            even.push(num)               
        } else{
            odd.push(num)
        }
    }

    if (even.length === 1 ){                       //if even length =1, return the even(rules say only one even or one odd in the array of integers)
        return even[0]
    } else{                                        //else return the one odd
         return odd[0]
    }
    
}

console.log(outlier([160, 3, 1719, 19, 11, 13, -21])) //logs 160
console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36])) //logs 11

function outlierTernary(integers) {
    let evens = []
    let odds = []
    integers.forEach(e => e % 2 === 0 ? evens.push(e) : odds.push(e))  //? true push even, if false push odd
    return odds.length === 1 ? odds[0] : evens[0]                      //return odds if odd.length=1 or if false return even(would be one based on ruleset)
  }