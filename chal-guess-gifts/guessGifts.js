var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

const guessGifts = (wishlist, presents) => {
    return wishlist.filter(function(x){   //Creates a new array with all of the elements of this array for which the provided filtering function returns true.
        return presents.some(function(y){   //Returns true if at least one element in this array satisfies the provided testing function.
          return x.size == y.size && x.clatters == y.clatters && x.weight == y.weight;
        });
      }).map(function(x){ return x.name; });  //Creates a new array with the results of calling a provided function on every element in this array.
}



console.log(guessGifts(wishlist, presents))  // must return ["Toy Car", "Mini Puzzle"]