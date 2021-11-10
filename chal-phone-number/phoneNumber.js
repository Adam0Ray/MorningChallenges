let createPhoneNumber = (nums) => {
let number = "(xxx) xxx-xxxx";              //set format
for (let i = 0; i < nums.length; i++){       //loop
    number = number.replace('x', nums[i]);    //use replace to target each x in the loop and replace witht he nums at the index
}                                             //Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
return number                              //return the result of the entire loop with the format of number
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) //logs (123) 456-7890



let createPhoneNumber2 = (nums) =>{
  return "(" + nums[0] + nums[1] + nums[2] + ") " + nums[3] + nums[4] + nums[5] + '-' + nums[6] + nums[7] + nums[8] + nums[9]  //use fromatting with proper spaceing
  }

  console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) //logs (123) 456-7890
