function repeat(times, callback) {
  for (let i = 0; i < times; i++) {
    callback(i);
  }
}

repeat(3, (index) => {
  console.log(`Callback call #${index + 1}`);
});

function operate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
console.log("Add result:", operate(5, 3, add));
