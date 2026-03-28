const words = ["first", "second", "third", "fourth"];
const firstStartsWithT = words.findIndex((word) => word.startsWith("t"));

console.log("Words:", words);
console.log("Index of first word starting with 't':", firstStartsWithT);
