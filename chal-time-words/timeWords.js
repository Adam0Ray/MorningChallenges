const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six',
         'seven', 'eight', 'nine', 'ten', 'eleven']
//set variable hours
const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen']

const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']
//set variable minutes

function timeWords(time) {
    if (time === '00:00') {
        return 'midnight'
    }
//special case for midnight
    if (time === '12:00') {
        return 'noon'
    }
//special case for noon
    let [hrs, mins] = time.split(':') // split into substrings, : as the seperator, returns an array that will be [hrs, mins] = ['01', '30']
    hrs = parseInt(hrs)  //returns an integer parsed form the string '01' becomes 1
    mins = parseInt(mins) // '30' becomes 30

    let str = hours[hrs % 12] + ' '           //hours[at index of 1 % 12 = 1, which is = 'one'] + blank string

    if (mins >= 20) {                    //this section uses the ones vs tens for proper vocabular example 'six eighteen am'//adding to str
        str += tens[Math.floor(mins / 10)] + ones[mins % 10]
    } else if (mins >= 10) {
        str += ones[mins]
    } else if (mins > 0) {
        str += `oh ${ones[mins]}`
    } else {
        str += `o'clock`
    }

    if (hrs >= 12) {            //section determines am or pm
        str += ' pm'
    } else {
        str += ' am'
    }
    
    return str
}

console.log(timeWords("00:00"))
console.log(timeWords("12:00"))
console.log(timeWords("01:00"))
// console.log(1 % 12)  //returns 1
// console.log(12 % 12) //returns 0