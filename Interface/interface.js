// Class //
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        console.log("".concat(phrase, ", ").concat(this.name, "!"));
    };
    return Person;
})();
var kaizer;
kaizer = new Person("Kaizer");
kaizer.greet("Yo");
var add;
add = function (a, b) {
    return a + b;
};
console.log(add(10, 7));
