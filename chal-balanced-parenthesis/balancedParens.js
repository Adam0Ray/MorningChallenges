// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function balancedPar(str) {
    let openPar = 0
    let closingPar = 0
    for (let i = 0; i < str.length; i++){
        if ( str[i] === "(" ){
            openPar +=1
        } else if ( str[i] === ")" ) {
            closingPar += 1
        }
    }
    return openPar === closingPar
}
console.log(balancedPar("()"))
console.log(balancedPar("(Oh Noes!)("))
console.log(balancedPar("((There's a bonus open paren here.)"))
console.log(balancedPar("Hey...there are no parens here!"))