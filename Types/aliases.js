function combine(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.toString() + b.toString();
    } else if (typeof a === "number" && typeof b === "number") {
        return +a + +b;
    } else {
        return "Invalid Input!";
    }
}
var combinedValue = combine(10, 7);
console.log(combinedValue);
var combinedNames = combine("Kaizer", " Williams");
console.log(combinedNames);
var combinedNamesAndValue = combine(10, "Williams");
console.log(combinedNamesAndValue);
