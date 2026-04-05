const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed successfully!");
    } else {
        reject("Task failed!");
    }
});

// Consuming the promise
myPromise
.then((result) => {
    console.log(result); // runs if resolved
})
.catch((error) => {
    console.log(error); // runs if rejected
});