


const sortProduct = (arr) => {
    let total= []
    arr.forEach((element,index) => {
        let totalObject = {
            total:element*(index+1),
            index: index
        }
        total.push(totalObject)        //push into total the product of the element * the index +1(instructions are to start at 1 not 0)
    })
    total.sort((a,b) => a.total - b.total)  //Arrays of objects can be sorted by comparing the value of one of their properties
    let returnedArray = []                 //this is the final array that we will be showing in console
    total.forEach(element => returnedArray.push(arr[element.index]))  //for each calls a function for each element in an array, push into returnedArray  
    return returnedArray
}
console.log(sortProduct([23, 2, 3, 4, 5]))  //returns [ 2, 3, 4, 23, 5 ]