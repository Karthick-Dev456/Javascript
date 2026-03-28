// Example of Try...Catch for Error Handling

let a = 10
let b = 0

try {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    const result = a / b;
    console.log("Result: " + result);
} catch (error) {
    console.log("Error caught: " + error.message);
} finally {
    console.log("Execution completed (finally block).");
}
