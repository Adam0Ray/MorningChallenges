const towerFunction = (numberOfFloors) =>{
    let tower = []
    let block = "*"
    for (let i = 0; i<numberOfFloors; i++){
        tower.push(block)
        block += '**'
        for (let x = 0; x<i; x++){
            tower[x] = ' ' + tower[x] + ' '
        }
    }
    return tower
}

console.log(towerFunction(7))


// [
//     '  *  ',      first loop
//     ' *** ',      first loop + '**'
//     '*****'       second loop +'**'
// ]