// Validation With Decorators //
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var registeredValidators = {};
function Required(target, propName) {
    var _a;
    var _b, _c;
    registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propName] = __spreadArray(__spreadArray([], ((_c = (_b = registeredValidators[target.constructor.name]) === null || _b === void 0 ? void 0 : _b[propName]) !== null && _c !== void 0 ? _c : []), true), [
        "required",
    ], false), _a));
}
function PositiveNumber(target, propName) {
    var _a;
    var _b, _c;
    registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propName] = __spreadArray(__spreadArray([], ((_c = (_b = registeredValidators[target.constructor.name]) === null || _b === void 0 ? void 0 : _b[propName]) !== null && _c !== void 0 ? _c : []), true), [
        "positive",
    ], false), _a));
}
function validate(obj) {
    var objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    var isValid = true;
    for (var prop in objValidatorConfig) {
        for (var _i = 0, _a = objValidatorConfig[prop]; _i < _a.length; _i++) {
            var validator = _a[_i];
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
var Course = /** @class */ (function () {
    function Course(title, price) {
        this.title = title;
        this.price = price;
    }
    __decorate([
        Required
    ], Course.prototype, "title", void 0);
    __decorate([
        PositiveNumber
    ], Course.prototype, "price", void 0);
    return Course;
}());
var courseForm = document.querySelector("form");
courseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var titleEl = document.getElementById("title");
    var priceEl = document.getElementById("price");
    var title = titleEl.value;
    var price = +priceEl.value;
    var createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid Input, Please Try Again!");
        return;
    }
    console.log(createdCourse);
});
