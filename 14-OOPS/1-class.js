// Simple Class Example in JavaScript

class Person {
    // The constructor is called automatically when a new instance is created
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // A method belonging to the class
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating instances (objects) of the Person class
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Calling the method on the instances
person1.greet();
person2.greet();