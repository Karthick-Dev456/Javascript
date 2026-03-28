let course = "JavaScript Basics"

// Index Accessing characters
console.log(course[0])
console.log(course.charAt(2))


// Negative Indexing
console.log(course.at(-1))


// To get count of characters in a string
console.log(course.length)


// To get the index of a character
console.log(course.indexOf("a"))


// To check if a string includes a character or substring
console.log(course.includes("Script"))


// To check a string starts with a character or substring
console.log(course.startsWith("Java"))


// To check a string ends with a character or substring
console.log(course.endsWith("Basics"))


// To convert a string to uppercase
console.log(course.toUpperCase())


// To convert a string to lowercase
console.log(course.toLowerCase())


// To trim whitespace from both ends of a string
let nameWithSpaces = "   Nikola Tesla   "
console.log(nameWithSpaces.trim())


// To split a string into an array of substrings
let words = course.split(" ")
console.log(words)


// To replace a substring with another substring
let newCourse = course.replace("Basics", "Advanced")
console.log(newCourse)


// To replace all occurrences of a substring with another substring
let replacedCourse = course.replaceAll("a", "q")
console.log(replacedCourse)


// To slice a portion of a string
let slicedCourse = course.slice(0, 10)
console.log(slicedCourse)


// To concatenate strings
let greeting = "Hello, " + course + "!"
console.log(greeting)


// Template literals for string interpolation

let person_name = "John"
let personalizedGreeting = `Hello, ${person_name}! Welcome to ${course}.`
console.log(personalizedGreeting)