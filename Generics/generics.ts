// Generics Type //

const namesGeneric: Array<string> = []; // string[]

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(200);
    }, 2000);
});

// Generic Function //

// extends Something => Constraint //

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge(
    { name: "Kaizer", hobbies: ["Writing", "Sports"] },
    { age: 21 }
);
console.log(mergeObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = "Got No Value.";
    if (element.length === 1) {
        description = "Got 1 Element.";
    } else if (element.length > 1) {
        description = "Got " + element.length + " Elements.";
    }
    return [element, description];
}

console.log(countAndDescribe("Yo, Kaizer!"));
console.log(countAndDescribe(["Sports", "Writing"]));
console.log(countAndDescribe([]));

// keyof Constraint //

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Kaizer" }, "name"));

// Generic Classes //

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Dante");
textStorage.addItem("Vivy");
textStorage.addItem("Hertz");

textStorage.removeItem("Dante");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addItem(10);
numberStorage.addItem(7);
numberStorage.addItem(21);

numberStorage.removeItem(21);

console.log(numberStorage.getItems());

// Generic Utility Types //

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}; // Partial => Makes All Properties Optional. //
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Pearl", "Ray"];
// names.push("Nero"); // Error
// names.pop(); // Error

function insert<T>(value: T, array: T[]) {
    const newArray = [value, ...array];
    return newArray;
}

const values = [47, 73, 91];

const numberArray = insert(52, values);
console.log(numberArray);

const buddies = ["Azrael", "Kira", "Roar"];

const nameArray = insert("Sky", buddies);
console.log(nameArray);
