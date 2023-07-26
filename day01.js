// Declare an empty array;
const emptyArray = Array()

// Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5]

// Find the length of your array
console.log(numbers.length())

// Get the first item, the middle item and the last item of the array
console.log(numbers[0])
console.log(numbers[numbers.length/2])
console.log(numbers[numbers.length - 1])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["hey", 1, "no", 2, "ok", {number: 3}]

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length())

// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length() / 2])
console.log(itCompanies[itCompanies.length() - 1])

// Print out each company
console.log(itCompanies)

// Change each company name to uppercase one by one and print them out
itCompanies.toLocaleUpperCase
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies[0] + ", " + itCompanies[1] + ", " + itCompanies[2] + ", " + itCompanies[3] + ", " + itCompanies[4] + ", " + itCompanies[5] + ", " + itCompanies[6] + " are big IT companies." )

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let indexOfGoogle = itCompanies.indexOf('Google')
if (indexOfGoogle != -1){
    console.log(itCompanies[1])
} else {
    console.log("Company not found.")
}

// Filter out companies which have more than one 'o' without the filter method
const includesOO = itCompanies.includes('oo')
if(itCompanies.indexOf(includesOO) == true){
    console.log(itCompanies[i])
}

// Sort the array using sort() method
itCompanies.sort()

// Reverse the array using reverse() method
itCompanies.reverse()

// Slice out the first 3 companies from the array
itCompanies.slice(0, 3)

// Slice out the last 3 companies from the array
itCompanies.slice(itCompanies.length() - 3, itCompanies.length())

// Slice out the middle IT company or companies from the array
itCompanies.slice(itCompanies.length()/2)

// Remove the first IT company from the array
itCompanies.shift()

// Remove the middle IT company or companies from the array
let removeMiddle = (itCompanies.length() - 1 /2).shift()

// Remove the last IT company from the array
itCompanies.pop()

// Remove all IT companies
itCompanies.slice(0, itCompanies.length())

// First remove all the punctuations and change the string to array and count the number of words in the array
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"] - 13
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
words.replace(',', '')
words.replace('.', '')
const words = text.split(" ")
console.log(words)
console.log(words.length)

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat")

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar")

// remove 'Honey' if you are allergic to honey
shoppingCart.pop()

// modify Tea to 'Green Tea'
shoppingCart[2] = 'Green Tea'

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let countryExists = shoppingCart.indexOf('Ethiopia')
if (countryExists == -1){
    shoppingCart.push('Ethiopia')
} else {
    console.log('ETHIOPIA')
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

let sassExists = webTechs.indexOf('Sass')
if (sassExists != -1){
    console.log('Sass is a CSS preprocess')
} else { 
    webTechs.push('Sass')
    console.log(webTechs)
}

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
    // Enter your age: 30
    // You are old enough to drive.

    // Enter your age:15
    // You are left with 3 years to drive.

    let userAgeInput = prompt("Enter your age: ")
    if (userAgeInput >= 18) {
        console.log('You are old enough to drive')
    } else {
        let yearsToWait = 18 - userAgeInput
        console.log('You are left with ' + yearsToWait + 'years to drive.')
    }

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    // Enter your age: 30
    // You are 5 years older than me.

    let userAgeInputt = prompt("Enter your age: ")
    let myAge = 26
    if(userAgeInput > myAge) {
        let ageDifference = userAgeInput - myAge
        console.log('You are ' + ageDifference + ' years older than me')
    } else {
        let yearsYounger = myAge - userAgeInput
        console.log('You are ' + yearsYounger + ' years younger than me')
    }

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways: using if else and ternary operator.
    // let a = 4
    // let b = 3

    if (a > b) {
        console.log('a is greater than b')
    } else {
        console.log('a is less than b')
    }

    let isGreater = true
    isGreater
        ? console.log('a is greater than b')
        : console.log('a is less than b')

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

    // Enter a number: 2
    // 2 is an even number

    // Enter a number: 9
    // 9 is is an odd number.

    let numberInput = prompt('Enter a number: ')
    if ((numberInput / 2) != 0){
        console.log(numberInput + ' is an odd number.')
    } else {
        console.log(numberInput + ' is an even number.')
    }