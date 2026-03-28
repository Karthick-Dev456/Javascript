const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Carol" },
];

const foundUser = users.find((user) => user.id === 2);

console.log("Users:", users);
console.log("Found user:", foundUser);
