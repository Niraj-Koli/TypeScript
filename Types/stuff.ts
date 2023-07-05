let noValues: undefined; // undefined Type //

let nullValues: null; // null Type //

let unknownValues: unknown; // unknown Type //

unknownValues = "Kaizer";
console.log(unknownValues);

unknownValues = 21;
console.log(unknownValues);

// Never Type //

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError("An Error Occurred!", 500);
