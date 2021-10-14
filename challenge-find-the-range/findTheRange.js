//With Icarus Romero

//Instructions**
// Starting array
//let array = [28, 43, -12, 30, 4, 0, -36]
//Instructions**

// Write your solution below:

let array=[28, 43, -12, 30, 4, 0, -36];
let Max=console.log("Max is " + Math.max(...array));
let Min=console.log("Min is " + Math.min(...array));

//The ... extracts and spreads the properties aross all array

//let array=[28, 43, -12, 30, 4, 0, -36];
//let Max=console.log("Max is " + Math.max.apply(Math, array));
//let Min=console.log("Min is " + Math.min.apply(Math, array));

//also works rather than using the ...

//let array=[28, 43, -12, 30, 4, 0, -36];
//let Max=console.log("Max is " + Math.max(...array));
//let Min=console.log("Min is " + Math.min(...array));

//Also works, Spacing did not affect the result


//let Nums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let Max=console.log("Max is " + Math.max(Nums));
//let Min=console.log("Min is " + Math.min(Nums));

//Doesn't work, Returns NaN without the ...