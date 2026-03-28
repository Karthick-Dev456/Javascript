const names = ["Zoe", "Anna", "John", "Mia"];
const sortedNames = [...names].sort((a, b) => a.localeCompare(b));

const numbers = [10, 2, 30, 4];
const sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log("Original names:", names);
console.log("Sorted names:", sortedNames);
console.log("Original numbers:", numbers);
console.log("Sorted numbers:", sortedNumbers);
