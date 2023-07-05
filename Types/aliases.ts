type aliases = string | number;

function combine(a: aliases, b: aliases) {
    if (typeof a === "string" && typeof b === "string") {
        return a.toString() + b.toString();
    } else if (typeof a === "number" && typeof b === "number") {
        return +a + +b;
    } else {
        return "Invalid Input!";
    }
}

const combinedValue = combine(10, 7);
console.log(combinedValue);

const combinedNames = combine("Kaizer", " Williams");
console.log(combinedNames);

const combinedNamesAndValue = combine(10, "Williams");
console.log(combinedNamesAndValue);
