let printDigits=(num) =>{
    while(num){                                  //while condition is true, loop through code
        lastDigit = num % 10                     //digit = n % 10  //  Get right-most digit at current loop. Ex. 10/10 =10.0 which prints 0
        console.log(lastDigit)                   //log out the last digit from previous line LastDigit  which is remainder 0
        num = (num- lastDigit) /10               //num is assigned to = (10-0) /10  which is 1
        
    }
}

printDigits(10)


// let printDigits=(num) =>{
//     while(num){                                  //while condition is true, loop through code (while number is true)
//         lastDigit = num % 10                     //digit = n % 10  //  Get right-most digit at current loop. Ex. 314/10 → 31.4 → 4
//         console.log(lastDigit)                   //log out the last digit from previous line LastDigit  which is remainder 4
//         num = (num- lastDigit) /10               //num is assigned to = (314-4) /10  which is 31, so now num is 31
//                                                  // lastDigit = 31 %10 = 3.1
//     }                                            //log remainder 1
// }                                                // num is assiged to = (31-1) = 30               
// printDigits(314)                                //30%10 = Ex. 30/10 → 3.0 → no remainder
//                                                 //no console log
//                                                 //(30-0) /10 = 3
//                                                 //3 %10 = 3/10=0.3
//                                                 // log  remainder 3



//  let printDigits=(num) =>{
//     while(num){                                  //while condition is true, loop through code (while number is true)
//         lastDigit = num % 10                     //digit = n % 10  //  Get right-most digit at current loop. Ex. 1/10 → 0.1 → 1
//         console.log(lastDigit)                   //log out the last digit from previous line LastDigit  which is remainder 1
//         num = (num- lastDigit) /10               //num assigned (0-1)/10 = -1/10 = -0.1 ==false
//     }                                            
// }                                                              
// printDigits(1)                                

                                                