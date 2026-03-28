// Example of Multi-line Arrow Functions

// Multi-line arrow function requires curly braces and an explicit return statement
const calculateTotal = (price, tax) => {
    const total = price + (price * tax);
    return total;
};

console.log("Total Price (100 + 10% tax): " + calculateTotal(100, 0.1));

const greetUser = (name) => {
    const message = "Welcome, " + name + "!";
    console.log(message);
};

greetUser("Alice");