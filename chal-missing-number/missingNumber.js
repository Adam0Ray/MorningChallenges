let missingNumber = (numList, MaxNum) =>{          //two input parameters (array, number we are checking until)
for (let i = 1; i <= MaxNum; i++)                  //loop through starting at one, up to and including MaxNum, iterate
    if (!numList.includes(i)) {                     //the numList array does not include i index in the loop
        return i                                    //function returns i from previous line in loop
    
    }
}
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10], 10))  //returns 8
missingNumber([2, 1, 4, 3, 6, 5, 7, 10, 9], 10)              //returns 8