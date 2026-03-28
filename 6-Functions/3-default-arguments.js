// Example of a function with default arguments

function welcomeUser(name, role = "Visitor") {
    console.log("Welcome, " + name + "! Your role is: " + role);
}

// Calling the function with one argument
welcomeUser("Alice");

// Calling the function with both arguments
welcomeUser("Bob", "Admin");