// Starting array
//Given an array of numbers, console.log True if any two numbers in the array add to zero, otherwise log False.
// let array = [28, 43, -12, 30, 4, 0, 12]
// // Write your solution below:


let answer = "false"
    for (let i = 0; i <array.length; i++){
        for ( let x = 0; x <array.length; x++){
            if (i != x){
                if( array[i] + array[x] === 0){
                    answer = "true"
                }
            }
        }
    }
    console.log(answer);

//logs true

// // Write your solution below:
// let array = [28, 43, -12, 30, 4, 0, 13]
// let answer = "False"
// for ( let i = 0; i < array.length; i++){
//     for (let x = 0; x < array.length; x++) {
//         if (i != x){
//             if ( array[i] + array[x] === 0){
//             answer = "true"
//             }
//         }    
//     }
// }
// console.log(answer);

//logs false

// let array = [28, 43, -12, 30, 4, 0, 13]
// let array2 =[28, 43, -12, 30, 4, 0, 13]
// // Write your solution below:

// let answer = "false"
//     for(let i = 0; i <array.length; i++){
//         for (let x = 0; x <array2.length; x++){
//             if (array[i] != array2[x]){
//                 if (array[i] + array2[x] === 0){
//                 answer = true
//                 }
//         }    
//         }

//     }
//     console.log(answer);
//     //logs false

// let array = [28, 43, -12, 30, 4, 0, 12]
// let array2 =[28, 43, -12, 30, 4, 0, 12]
// // Write your solution below:

// let answer = "false"
//     for(let i = 0; i <array.length; i++){
//         for (let x = 0; x <array2.length; x++){
//             if (array[i] != array2[x]){
//                 if (array[i] + array2[x] === 0){
//                 answer = true
//                 }
//         }    
//         }

//     }
//     console.log(answer);
//     //logs true