let fruits = ["apple", "banana", "cherry", "orange", "kiwi"]

for (let fruit of fruits) {
    console.log(fruit)
}

for (let fruit of fruits) {
    if (fruit === "cherry") {
        console.log("Found cherry!")
    }
}
