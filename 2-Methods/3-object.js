let employee = {
    name: "Alice",
    age: 30,
    position: "Software Engineer",
    department: "IT"
}


// To access object properties
console.log(employee.name)
console.log(employee["age"])


// To count the number of properties in an object
console.log(Object.keys(employee).length)


// To add a new property to an object
employee.salary = 70000
console.log(employee)


// To update an existing property of an object
employee.position = "Senior Software Engineer"
console.log(employee)


// To delete a property from an object
delete employee.department
console.log(employee)


// To check if an object has a specific property
console.log(employee.hasOwnProperty("name"))


// To get all keys of an object
console.log(Object.keys(employee))


// To get all values of an object
console.log(Object.values(employee))


// To get all key-value pairs of an object
console.log(Object.entries(employee))


// To copy an object
let clonedEmployee = { ...employee }
console.log(clonedEmployee)


// To merge two objects
let additionalInfo = { experience: 5, location: "New York" }
let mergedEmployee = { ...employee, ...additionalInfo }
console.log(mergedEmployee)


// To freeze an object (make it immutable)
Object.freeze(employee)
employee.name = "Bob" 
console.log(employee)


// To check if an object is frozen
console.log(Object.isFrozen(employee))


// To seal an object (prevent adding or deleting properties, but allow updating existing properties)
Object.seal(employee)
employee.salary = 75000 
delete employee.age
console.log(employee)


// To check if an object is sealed
console.log(Object.isSealed(employee))


