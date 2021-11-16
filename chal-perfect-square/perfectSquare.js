const perfectSquare = (firstSqrt) =>{
let num = Math.sqrt(firstSqrt)     //The Math.round() function returns the value of a number rounded to the nearest integer.
    if(Math.round(num) === num){   //check that num is a perfect square(if it has a decimal place, it is not)
        return Math.pow(++num, 2) //The Math.pow() function returns the base to the exponent power, as in base^exponent.
    } else{
        return -1
    }

}

console.log(perfectSquare(9))  //16
console.log(perfectSquare(289))  //324
console.log(perfectSquare(3000)) //-1