const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
const product = numbers.reduce((accumulator, number) => accumulator * number, 1);

console.log("Numbers:", numbers);
console.log("Sum:", sum);
console.log("Product:", product);
