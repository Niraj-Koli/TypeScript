// Type Casting //

// ! => Non-Null Assertion Operator //
const userInputElement = document.getElementById(
    // Used When Sure That Element Gives A Value //
    "user-input"
)! as HTMLInputElement;

userInputElement.value = "Yo, There!";
console.log("Look At The Web Page!");

// const userInputElement = document.getElementById("user-input");

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;

// (userInputElement as HTMLInputElement).value = "Yo, There Again!";
