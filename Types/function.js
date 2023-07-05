// Function Types //
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result = " + num);
}
printResult(add(21, 47));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 7, function (result) {
    console.log(result);
});
var combineFunction;
combineFunction = printResult;
console.log(combineFunction(71));
var combineValues;
combineValues = add;
console.log(combineValues(21, 47));
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combinedAges = combine(10, 7);
var combinedNames = combine("Kaizer", " Williams");
var combinedStringAndNumber = combine("Kaizer", 7);
var combinedNumberAndString = combine(10, "Williams");
console.log(combinedAges, combinedNames, combinedStringAndNumber, combinedNumberAndString);
