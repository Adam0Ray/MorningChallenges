//Write a function that returns an object which includes the count of food options selected by the developers from the meetup sign-up form array.


// You can test your function with these arrays, just uncomment to use

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
//   meal: 'vegetarian' },
// { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
//   meal: 'standard' },
// { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
//   meal: 'vegan' },
// { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
//   meal: 'vegetarian' },
// ];

// function mealCounter(list) {
//     var orders = {};
//     list.forEach(d=>{
//       if(orders[d.meal]) orders[d.meal]++;
//       else orders[d.meal] = 1;
//     });
//     return orders;
//   }


// const mealCount = a => a.reduce( (acc,v) => ( acc[v.meal] = ( acc[v.meal] || 0 ) + 1, acc ), {} ) ;
// console.log(mealCounter(list1))

var list2 = [
{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
  meal: 'vegetarian' },
{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
  meal: 'standard' },
{ firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
  meal: 'vegan' },
{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
  meal: 'standard' },
{ firstName: 'Noel', lastName: 'O.', country: 'Albania', continent: 'Europe', age: 23, language: 'Python', 
  meal: 'gluten-intolerant' },
{ firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript', 
  meal: 'standard' },
{ firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby', 
  meal: 'gluten-intolerant' },
{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  meal: 'diabetic' },
{ firstName: 'Nareh', lastName: 'Q.', country: 'Armenia', continent: 'Europe', age: 30, language: 'Clojure', 
  meal: 'standard' },
{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript', 
  meal: 'standard' },
];

function mealCounter(list) {
    var orders = {};
    list.forEach(d=>{
      if(orders[d.meal]) orders[d.meal]++;
      else orders[d.meal] = 1;
    });
    return orders;
  }


const mealCount = a => a.reduce( (acc,v) => ( acc[v.meal] = ( acc[v.meal] || 0 ) + 1, acc ), {} ) ;
console.log(mealCounter(list2))