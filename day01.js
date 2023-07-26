// Test commit

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
itCompanies.slice(0, itCompanies.length() - 1)