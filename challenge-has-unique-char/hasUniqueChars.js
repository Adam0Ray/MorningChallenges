 // Write your code below


function hasUniqueChars(par){                      
    for(let i = 0;i < par.length; i++){              //first for loop over i
            for(let x = i+1; x <= par.length-1; x++){    //second loop comparing the first index in loop to next index in loop+1 and subtracting one from length to account for the +1
            if (par[i] === par[x]){             //comparing par[i] at first index to par[x] at the next index from the first for loop
                return false;
            }
        } 
    }              
    return true;
}
console.log(hasUniqueChars('Word'))
console.log(hasUniqueChars('Woord'))


//below, dont need to create the variables

// function hasUniqueChars(par){
//     let parLength = par.length;                     //creating a variable outside the for loop
//     for(let i = 0;i < parLength; i++){              //first for loop over i
//         let comparison = par[i];                    //creating a variable outside the for loop
//         for(let x = i+1; x <= parLength-1; x++){    //second loop comparing the first index in loop to next index in loop+1 and subtracting one from length to account for the +1
//             if (comparison === par[x]){             //comparing par[i] at first index to par[x] at the next index from the first for loop
//                 return false;
//             }
//         } 
//     }              
//     return true;
// }
// console.log(hasUniqueChars('Word'))
// console.log(hasUniqueChars('Woord'))