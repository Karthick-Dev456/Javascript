// Example of using Set in JavaScript

// 1. Creating a Set
const mySet = new Set();

// 2. Adding values
mySet.add(10);
mySet.add(20);
mySet.add("Hello");
mySet.add(10); // Duplicate value, will be ignored

console.log("Set after adding values:", mySet);

// 3. Verifying values (Checking existence)
console.log("Has 20?", mySet.has(20)); // true
console.log("Has 30?", mySet.has(30)); // false

// 4. Deleting values
mySet.delete(20);
console.log("Set after deleting 20:", mySet);

// 5. Removing duplicates from an array
const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
const uniqueNumbers = [...new Set(numbers)];

console.log("Original array:", numbers);
console.log("Array without duplicates:", uniqueNumbers);