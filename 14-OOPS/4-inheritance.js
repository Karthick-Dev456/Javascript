// Example of Inheritance in JavaScript

// Parent class (Superclass)
class Animal {
    constructor(name) {
        this.name = name;
    }

    // A general method that will be inherited by child classes
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Child class (Subclass) that inherits from Animal
class Dog extends Animal {


    constructor(name, breed) {
        // 'super(name)' calls the constructor of the parent class (Animal)
        // This is necessary to initialize the 'name' property from the parent.
        super(name);
        this.breed = breed;
    }

    // A method specific to the Dog class
    bark() {
        console.log(`${this.name} says Woof!`);
    }
}

// Create an instance of the Dog class
const myDog = new Dog("Buddy", "Golden Retriever");

myDog.eat(); // This method is inherited from the Animal class.
myDog.bark(); // This method is from the Dog class itself.
console.log(`${myDog.name} is a ${myDog.breed}.`);