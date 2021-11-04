// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function balancedPar(str) {
    let openPar = 0                                        //set variable to 0 so we can count parenthesis
    let closingPar = 0                                     //set variable to 0 so we can count parenthesis
    for (let i = 0; i < str.length; i++){                  //for loop
        if ( str[i] === "(" ){                             //search for open par
            openPar +=1                                    //add one if found 1
        } else if ( str[i] === ")" ) {                     //search for close par
            closingPar += 1                                //add one if found 1
        }
    }
    return openPar === closingPar                         //if the number of ( is equal to ) then return true, if not return false
}
console.log(balancedPar("()"))
console.log(balancedPar("(Oh Noes!)("))
console.log(balancedPar("((There's a bonus open paren here.)"))
console.log(balancedPar("Hey...there are no parens here!"))