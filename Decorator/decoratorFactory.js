// Decorators //
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function Logger(constructor: Function) {
//     console.log("Logging ...");
//     console.log(constructor);
// }
// Decorator Factory //
function Logger(logString) {
    console.log("Logger Factory");
    return function (constructor) {
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
function WithTemplate(template, hookId) {
    console.log("Template Factory");
    return function (originalConstructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                console.log("Rendering Template ...");
                var hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = _this.name;
                }
                return _this;
            }
            return class_1;
        }(originalConstructor));
    };
}
// @Logger("LOGGING - PERSON")
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Kaizer";
        console.log("Creating Person Object ...");
    }
    Person = __decorate([
        Logger("LOGGING"),
        WithTemplate("<h1>Person Object</h1>", "app")
    ], Person);
    return Person;
}());
var person = new Person();
console.log(person);
