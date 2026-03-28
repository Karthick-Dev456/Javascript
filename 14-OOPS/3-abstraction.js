// Example of Abstraction in JavaScript

class CoffeeMachine {
    // Public method: The simple interface exposed to the user
    brewCoffee() {
        console.log("Starting the brewing process...");
        this.#boilWater();
        this.#grindBeans();
        this.#pourWater();
        console.log("Your coffee is ready! ☕");
    }

    // Private methods: Complex implementation details hidden from the user
    #boilWater() {
        console.log("- Boiling water to 90 degrees Celsius...");
    }

    #grindBeans() {
        console.log("- Grinding coffee beans...");
    }

    #pourWater() {
        console.log("- Pouring hot water over the ground coffee...");
    }
}

const myMachine = new CoffeeMachine();

// The user only interacts with the simple, abstract interface
myMachine.brewCoffee();