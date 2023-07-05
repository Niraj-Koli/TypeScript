var noValues; // undefined Type //
var nullValues; // null Type //
var unknownValues; // unknown Type //
unknownValues = "Kaizer";
console.log(unknownValues);
unknownValues = 21;
console.log(unknownValues);
// Never Type //
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An Error Occurred!", 500);
