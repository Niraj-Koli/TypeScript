// Interface //
interface Named {
    readonly name: string;
    address?: string; // Optional Property //
}

interface Greeter extends Named {
    greet(phrase: string): void;
    message?(value: string): void; // Optional Method //
}

// Class //
class Person implements Greeter {
    name: string;
    age?: number; // Optional Property //

    constructor(name: string, age?: number) {
        this.name = name;
    }

    greet(phrase: string) {
        console.log(`${phrase}, ${this.name}!`);
    }
}

let kaizer: Greeter;

kaizer = new Person("Kaizer");
kaizer.greet("Yo");

// Function Interface //

type Func = (a: number, b: number) => number;

interface FuncInterface {
    (a: number, b: number): number;
}

let add: FuncInterface;

add = (a: number, b: number) => {
    return a + b;
};

console.log(add(10, 7));
