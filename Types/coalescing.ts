// Nullish Coalescing //

const userInputAlpha = null || undefined;
const userInputBeta = "";

const storedDataAlpha = userInputAlpha ?? "DEFAULT";
const storedDataBeta = userInputBeta ?? "DEFAULT";

console.log(storedDataAlpha);
console.log(storedDataBeta);
