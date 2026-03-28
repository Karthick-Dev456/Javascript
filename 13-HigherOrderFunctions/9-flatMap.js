const sentences = ["Hello world", "JavaScript is fun"];
const words = sentences.flatMap((sentence) => sentence.split(" "));

console.log("Sentences:", sentences);
console.log("Flat-mapped words:", words);
