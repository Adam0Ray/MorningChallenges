///p0 = 1000 year one
//percent increase = 2 %
//aug =50
//p=1200  number of people to get surpass
//p0,percent,additional,p
//function returns how many years to see 

const nbYear = (p0, percent, aug, p) =>{
    for (var i = 0; p0 < p; i++){                 //note that let wont allow i be logged, var will
        p0 = p0 *(1 + percent / 100) + aug
    }
    return i
}
console.log( nbYear(1500, 5, 100, 5000))  //logs 15
console.log( nbYear(1500000, 2.5, 10000, 2000000)) //logs 10

//The main difference is scoping rules. Variables declared by var keyword are scoped to the immediate function body (hence the function scope) while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).


// nbYear(1500, 5, 100, 5000) --> 15

// nbYear(1500000, 2.5, 10000, 2000000) --> 10