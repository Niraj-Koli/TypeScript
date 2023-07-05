// Function Types //

function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result = " + num);
}

printResult(add(21, 47));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 7, (result) => {
    console.log(result);
});

let combineFunction: Function;

combineFunction = printResult;

console.log(combineFunction(71));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(21, 47));

// Function Overloading //

type Combinable = number | string;

function combine(input1: number, input2: number): number;
function combine(input1: string, input2: string): string;
function combine(input1: number, input2: string): string;
function combine(input1: string, input2: number): string;
function combine(input1: Combinable, input2: Combinable) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return +input1 + +input2;
    } else {
        return input1.toString() + input2.toString();
    }
}

const combinedAges = combine(10, 7);
const combinedNames = combine("Kaizer", " Williams");
const combinedStringAndNumber = combine("Kaizer", 7);
const combinedNumberAndString = combine(10, "Williams");

console.log(
    combinedAges,
    combinedNames,
    combinedStringAndNumber,
    combinedNumberAndString
);
