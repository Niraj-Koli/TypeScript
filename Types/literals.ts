// Literals Type //

type ConversionDescriptor = "as-number" | "as-text";
type Combinable = number | string;

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result: Combinable;

    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedAges = combine(10, 7, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("10", "7", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Kaizer", " Williams", "as-text");
console.log(combinedNames);
