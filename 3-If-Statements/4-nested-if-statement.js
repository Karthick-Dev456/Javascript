// Nested If Statement
let age = 20;
let hasLicense = true;

if (age >= 18) {
    console.log("You are old enough to drive.");

    if (hasLicense) {
        console.log("You have a license. You can drive!");
    } else {
        console.log("You don't have a license. You cannot drive.");
    }
} else {
    console.log("You are too young to drive.");
}