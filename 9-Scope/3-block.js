// Block scope example

if (true) {
    // Variables declared with let or const inside a block {} are block-scoped
    let blockMessage = "I am inside a block";
    const blockConst = "I am also inside a block";
    console.log(blockMessage);
    console.log(blockConst);
}
