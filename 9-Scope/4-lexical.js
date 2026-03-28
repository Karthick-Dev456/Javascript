// Lexical Scope Example
// Inner functions have access to variables defined in their outer scope

function Data() {
    let content = "I am from the outer scope"

    function Something() {
        // The inner function can access outerVar due to lexical scoping
        console.log(content)
    }

    Something()
}

Data()
