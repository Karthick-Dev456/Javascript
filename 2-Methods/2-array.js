let fruits = ["apple", "banana", "cherry", "orange", "kiwi"]

// Accessing elements by index
console.log(fruits[0])


// Negative indexing
console.log(fruits.at(-1))


// Length of an array
console.log(fruits.length)


// To confirm if a variable is an array
console.log(Array.isArray(fruits))


// To add an element to the end of an array
fruits.push("grape")
console.log(fruits)


// To remove the last element from an array
fruits.pop()
console.log(fruits)


// To add an element to the beginning of an array
fruits.unshift("pineapple")
console.log(fruits)


// To remove the first element from an array
fruits.shift()
console.log(fruits)


// To update an element at a specific index
fruits[1] = "blueberry"
console.log(fruits)


// To slice a portion of an array
let citrusFruits = fruits.slice(2, 4)
console.log(citrusFruits)


// To find the index of an element in an array
console.log(fruits.indexOf("banana"))


// To check if an array includes a specific element
console.log(fruits.includes("kiwi"))


// To concat two arrays
let tropicalFruits = ["mango", "papaya"]
let allFruits = fruits.concat(tropicalFruits)
console.log(allFruits)


// To update and remove elements using splice
fruits.splice(2, 1, "strawberry")
console.log(fruits)


// To join all elements of an array into a string
let fruitString = fruits.join(", ")
console.log(fruitString)


// To sort an array in ascending order
fruits.sort()
console.log(fruits)


// To sort an array in descending order
fruits.reverse()
console.log(fruits)


// To sort an array of numbers in ascending order
let numbers = [5, 2, 9, 1, 5, 6]
numbers.sort((a, b) => a - b)
console.log(numbers)


// To sort an array of numbers in descending order
numbers.sort((a, b) => b - a)
console.log(numbers)


// To find the maximum value in an array of numbers
let maxNumber = Math.max(...numbers)
console.log(maxNumber)


// To find the minimum value in an array of numbers
let minNumber = Math.min(...numbers)
console.log(minNumber)


// To destructure an array into individual variables
let [firstFruit, secondFruit, ...otherFruits] = fruits
console.log(firstFruit)
console.log(secondFruit)
console.log(otherFruits)


// To freeze an array to prevent modifications
Object.freeze(fruits)
fruits.push("watermelon") // This will not work
console.log(fruits)


// To check if an array is frozen
console.log(Object.isFrozen(fruits))


// To seal an array to prevent adding or removing elements, but allow updating existing elements
Object.seal(fruits)
fruits[0] = "grapefruit" // This will work
fruits.push("watermelon") // This will not work
console.log(fruits)


// To check if an array is sealed
console.log(Object.isSealed(fruits))


// To copy an array using spread operator
let copiedFruits = [...fruits]
console.log(copiedFruits)


// To empty an array
fruits.length = 0
console.log(fruits)