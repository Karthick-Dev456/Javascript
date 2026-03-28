// Example of a function that handles unlimited arguments using Rest Parameters

function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

// Calling the function with different numbers of arguments
console.log("Sum of 3 numbers: " + sumAll(10, 20, 30));
console.log("Sum of 6 numbers: " + sumAll(1, 2, 3, 4, 5, 6));
console.log("Sum of 0 numbers: " + sumAll());

// Another example: Combining fixed arguments with rest parameters
function displayScores(studentName, ...scores) {
    console.log("Student: " + studentName);
    console.log("Scores: " + scores.join(", "));
}

displayScores("Alice", 85, 92, 78, 95);
