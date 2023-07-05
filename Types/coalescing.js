// Nullish Coalescing //
var userInputAlpha = null || undefined;
var userInputBeta = "";
var storedDataAlpha = userInputAlpha !== null && userInputAlpha !== void 0 ? userInputAlpha : "DEFAULT";
var storedDataBeta = userInputBeta !== null && userInputBeta !== void 0 ? userInputBeta : "DEFAULT";
console.log(storedDataAlpha);
console.log(storedDataBeta);
