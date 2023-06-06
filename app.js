// Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

const maxOfTwoNumbers = (num1, num2) => {

    if(num1 === num2){
        return num1
    } else if(num1 > num2){
        return num1
    } else {
        return num2
    }
}

console.log( "returns max of 2 numbers:",maxOfTwoNumbers(3,8))





// ***************************************
// Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = (num1,num2,num3) => {

    if(num1 >= num2 && num1 >= num3){
        return num1
    } else if (num2 >= num1 && num2 >= num3){
        return num2
    } else {
        return num3
    }
}


console.log( "returns max of 3 numbers:",maxOfThree(3,4,5) )
console.log( "returns max of 3 numbers:",maxOfThree(22,5,7) )
console.log( "returns max of 3 numbers:",maxOfThree(1,40,5) )

console.log( "returns max of 3 numbers:",maxOfThree(3,3,3))
console.log( "returns max of 3 numbers:",maxOfThree(7,7,3))
console.log( "returns max of 3 numbers:",maxOfThree(3,4,4))


// Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
console.log('this is the third question below')
const isCharAVowel = (letter) => {
    let smallLetter = letter.toLowerCase()
    const vowels = 'aeiou'
    if(vowels.includes(smallLetter)){
        return true
    } else {
        return false
    }
}

// let vowels = ['a','e','i','o','u']
// let letter = 'I'

// console.log( vowels.includes(letter) )
// includes method works on arrays and strings

// console.log("look at this one",letter === vowels)

console.log( "testing with capital vowel",isCharAVowel('I') )
console.log( "is character a vowel",isCharAVowel('b') )




// Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
const sumArrayThat = (arrayOfNums) => {
    let sum = 0
    for(let i = 0; i < arrayOfNums.length; i++){
        sum = sum + arrayOfNums[i]
    }
    return sum
}

// zero based index
// let array = [1, 2, 3, 4, 5]


console.log( sumArrayThat([2,4,5,6]) ) // 17
console.log( sumArrayThat([1,1]) ) // 2
console.log( sumArrayThat([3,0,1]) ) // 4
console.log( sumArrayThat([0,1,2,3,4,5,6,6,7,8,9,9,0,0,7,5,4,2,2,5,67,470502752,8,9]) ) // 470502921


// doesnt work. i forget how to use reduce method 
// const sumArray = (numsArray) => {
//     console.log(numsArray)
//     numsArray.reduce((acc, cur) => {
//         acc += cur, 0
//     })
// }
// console.log("sum array reduce",sumArray([1,2,3]))

// ***************************************
// Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

const multiplyArray = (numsArray) => {
    let product = 1

    numsArray.forEach((number) => {
        product *= number
    })
    return product
}

console.log( "returns product of numbers",multiplyArray([2, 4, 5]) )


// ***************************************
// Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

const numsArg = (args) => {
    return args.length
    // only works if the argument is an array.... or single string..
}

console.log("returns number of arguments passed",numsArg('this doesnt work'))


// ***************************************
// Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
const reverseString = (string) => {
    return string.split('').reverse().join('')
}

let string = "rockstar"

// console.log( Array.from(string) )
// console.log( string.split('').reverse().join('') )

console.log("returns rockstar reverse:", reverseString("rockstar") )
console.log("returns temitope reverse:", reverseString("temitope") )
console.log("returns jenna reverse:", reverseString("jenna") )


// ***************************************
// Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = (arrayOfStrings) => {
    
    let lengths = []

    arrayOfStrings.forEach((banana) => {
        lengths.push(banana.length)
    })

    return Math.max(...lengths)
}

// let array = [1,4,7,0]
// console.log( array )
// console.log( ...array)

console.log( "returns longest string in array:",longestStringInArray(['hello',"goodbye","temitope"]) )
console.log( "returns longest string in array:",longestStringInArray(['njkdwvhbkwej',"wef","flwje"]) )

const lengthArray = (array) => {

    let lengthOfWords = []

    array.forEach((word) => {
        lengthOfWords.push(word.length)
    })
    // console.log(typeof Math.max(lengthOfWords))
    return Math.max(lengthOfWords)
}

console.log( "also returns longest string in array:",lengthArray(["three", "two", "hellothere", "hi"]) )

console.log( Math.max([14,5,1,20]) )


// ***************************************
// Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

const stringsLongerThan = (arrayOfStrings,number) => {

    let longerStrings = []

    arrayOfStrings.forEach((string) => {
        if(string.length > number){
            longerStrings.push(string)
        } 
    })
    
    return longerStrings
}

console.log( "returns array of strings longer than number given:",stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) )





// ***************************************************************
// practice for myself
function evenArray(nums){
    let evenNums = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0 ){
            evenNums.push(nums[i])
        }
    }
    return evenNums
}

console.log( "returns even numbers from array:",evenArray([1,2,3,4,5,6]) )

// with leon
function onlyEvens(nums){
    let evens = []

    nums.forEach((num) => {
        num %2 ? '' : evens.push(num)
    })

    return evens
}

console.log("also returns even numbers from array:",onlyEvens([1,2,3,4,5,6,7,8,9,10]))
