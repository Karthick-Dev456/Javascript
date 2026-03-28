// Example of Polymorphism in JavaScript

class Animal {
    makeSound() {
        console.log("Some generic animal sound...");
    }
}

class Dog extends Animal {
  // Overriding the parent's makeSound method
    makeSound() {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
  // Overriding the parent's makeSound method
    makeSound() {
        console.log("Meow!");
    }
}

// Demonstrating Polymorphism
const animals = [
  new Animal(),
  new Dog(),
  new Cat()
];

// The same method call produces different behaviors based on the object's class
animals.forEach(animal => animal.makeSound());