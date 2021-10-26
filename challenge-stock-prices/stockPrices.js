//with Immanuel Mamou
//highest price 
//lowest price

const best= price => {
    let profitPotential = 0
    let lowStock
    for(i = 0; i < price.length; i++){
        if(price[i] < lowStock || lowStock === undefined){ //if price is less than lowest stock or if undefined, then
            lowStock = price[i]                            //then set lowStock to the price
        }   
        let profit = price[i] - lowStock                  //price at i minus lowest stock in loop
        if (profit > profitPotential){                        //if profit >0
            profitPotential = profit                          //let profitPotential be equal to profit
        }       
    }
    return profitPotential                                    //returns potential profit
}
console.log(best([15, 10, 20, 22, 1, 9]))  //logs 12
console.log(best([5, 4 , 3, 2, 1]))        //logs 0
