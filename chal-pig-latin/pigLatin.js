// Write your solution below:
//With Icarus Romero

const pigLatin = (phrase) =>{
    phrase = phrase.toLowerCase();
    let word = phrase.split ( ' ' )   //splits word from "hello world" to "["hello", "world"] with index [0] and [1] |Splits a String object into an arr of strgs by separating the stng into substrngs.
    for ( i = 0; i < word.length; i++){
        if ( word[i][0] === 'a' || word[i][0] === 'e' || word[i][0] === 'i' || word[i][0] === 'o' || word[i][0] ) {
            word[i] += 'yay'
        } else {
            word[0] += word[i][0]
            word[0] += 'ay'
            word[0] = word[0].substring(1)  //substring: Returns the characters in a string between two indexes into the string.
        }                                   //.substring(int between 0 and one less than length of string, (optional) between 0 and length of the string.)
    }
    console.log(word)
}
pigLatin('hello world')

//logs [ 'helloyay', 'worldyay' ]

var PigLatin = function(phrase) {
    return phrase.replace(/\b(\w)(\w+)\b/g, '$2$1ay');
};
pigLatin('hello world')

