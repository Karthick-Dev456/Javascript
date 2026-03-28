let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of numbers) {
    if (num === 6) {
        console.log("Breaking the loop at 6");
        break;
    }
    console.log(num);
}