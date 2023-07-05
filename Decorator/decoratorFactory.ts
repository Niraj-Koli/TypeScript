// Decorators //

// function Logger(constructor: Function) {
//     console.log("Logging ...");
//     console.log(constructor);
// }

// Decorator Factory //

function Logger(logString: string): any {
    console.log("Logger Factory");
    return function (constructor: Function) {
        console.log("Logging ...");
        console.log(logString);
        console.log(constructor);
    };
}

// function WithTemplate(template: string, hookId: string): any {
//     console.log("Template Factory");
//     return function (constructor: any) {
//         console.log("Rendering Template ...");
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor();
//         if (hookEl) {
//             hookEl.innerHTML = template;
//             hookEl.querySelector("h1")!.textContent = p.name;
//         }
//     };
// }

function WithTemplate(template: string, hookId: string): any {
    console.log("Template Factory");
    return function <T extends { new (...args: any[]): { name: string } }>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log("Rendering Template ...");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1")!.textContent = this.name;
                }
            }
        };
    };
}

// @Logger("LOGGING - PERSON")

@Logger("LOGGING")
@WithTemplate("<h1>Person Object</h1>", "app")
class Person {
    name = "Kaizer";

    constructor() {
        console.log("Creating Person Object ...");
    }
}

const person = new Person();
console.log(person);
