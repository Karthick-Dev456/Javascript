let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Printing only odd numbers using continue:");

for (let num of numbers) {
    if (num % 2 === 0) {
        // Skip the current iteration if the number is even
        continue;
    }
    console.log(num);
}