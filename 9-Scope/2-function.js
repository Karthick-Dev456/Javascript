// Local scope example

function localScopeExample() {
    // Variable declared inside a function is local to that function
    let localMsg = "I am local to this function";
    console.log(localMsg);
}

localScopeExample();

// This would cause a ReferenceError because localMsg is not accessible here
// console.log(localMsg);