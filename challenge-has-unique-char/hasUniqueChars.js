 // Write your code below

function hasUniqueChars(par){
    let parLength = par.length;
    for(let i = 0;i < parLength; i++){
        let comparison = par[i];
        for(let x = i+1; x <= parLength-1; x++){  //comparing the first index in loop to next index in loop+1 and subtracting one from length to account for the +1
            if (comparison === par[x]){
                return false;
            }
        } 
    }              
    return true;
}
console.log(hasUniqueChars('Word'))
console.log(hasUniqueChars('Woord'))