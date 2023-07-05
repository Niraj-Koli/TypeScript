"use strict";
// Generics Type //
const namesGeneric = []; // string[]
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(200);
    }, 2000);
});
// Generic Function //
// extends Something => Constraint //
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Kaizer", hobbies: ["Writing", "Sports"] }, { age: 21 });
console.log(mergeObj);
function countAndDescribe(element) {
    let description = "Got No Value.";
    if (element.length === 1) {
        description = "Got 1 Element.";
    }
    else if (element.length > 1) {
        description = "Got " + element.length + " Elements.";
    }
    return [element, description];
}
console.log(countAndDescribe("Yo, Kaizer!"));
console.log(countAndDescribe(["Sports", "Writing"]));
console.log(countAndDescribe([]));
// keyof Constraint //
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Kaizer" }, "name"));
// Generic Classes //
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Dante");
textStorage.addItem("Vivy");
textStorage.addItem("Hertz");
textStorage.removeItem("Dante");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(10);
numberStorage.addItem(7);
numberStorage.addItem(21);
numberStorage.removeItem(21);
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {}; // Partial => Makes All Properties Optional. //
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ["Pearl", "Ray"];
// names.push("Nero"); // Error
// names.pop(); // Error
function insert(value, array) {
    const newArray = [value, ...array];
    return newArray;
}
const values = [47, 73, 91];
const numberArray = insert(52, values);
console.log(numberArray);
const buddies = ["Azrael", "Kira", "Roar"];
const nameArray = insert("Sky", buddies);
console.log(nameArray);
