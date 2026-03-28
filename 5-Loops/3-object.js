// To loop through the properties of an object, we can use a for...in loop.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
}

for (let x in person) {
    console.log(x)
}

for (let x in person) {
    console.log(person[x])
}

