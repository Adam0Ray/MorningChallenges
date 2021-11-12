const dnaCompliment = (str) =>{
    let complimentarySide = [];                           //blank array
    for(let i = 0; i < str.length; i++){
      if(str[i]==="A"){                           //if A push T into complimentarySide
        complimentarySide.push("T")
      }
      else if(str[i]==="T"){
        complimentarySide.push("A")
      }
      else if(str[i]==="G"){
        complimentarySide.push("C")
      }
      else if(str[i]==="C"){
        complimentarySide.push("G")
      }
    }
    return complimentarySide.join("");               //return the for loop and join the array indexes together into a string
  }
  
  console.log(dnaCompliment("ATTGC"))  //logs TAACG
  console.log(dnaCompliment("GTAT"))   //logs CATA