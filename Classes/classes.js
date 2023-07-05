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
// Class // + // Abstract Class//
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // public name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    // Static Method //
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length, this.employees);
    };
    Department.fiscalYear = new Date().getFullYear(); // Static Property //
    return Department;
}());
// const marketing = new Department("Apollo Arc", "Marketing"); // Object //
// marketing.addEmployee("Christopher");
// marketing.addEmployee("Jofra");
// marketing.describe();
// marketing.printEmployeeInformation();
// console.log(marketing);
// const operating = { name: "Operating", describe: marketing.describe };
// operating.describe();
var Optimus = Department.createEmployee("Optimus");
console.log(Optimus, Department.fiscalYear);
// Inheritance //
var Technology = /** @class */ (function (_super) {
    __extends(Technology, _super);
    function Technology(id, reports) {
        var _this = _super.call(this, id, "Technology") || this;
        _this.id = id;
        _this.reports = reports;
        _this.lastReport = reports[0];
        _this.admins = [];
        return _this;
    }
    // static getInstance() { // To Create More Instances Of A Single Class //
    //     if (this.instance) {
    //         return this.instance;
    //     }
    //     this.instance = new Technology("Burnz Arc", []);
    //     return this.instance;
    // }
    Technology.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    Object.defineProperty(Technology.prototype, "getLastReport", {
        // Getter //
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No Report Found.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Technology.prototype, "setLastReport", {
        // Setter //
        set: function (value) {
            if (!value) {
                throw new Error("Please Pass A Valid Value!");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    Technology.prototype.describe = function () {
        console.log("Department: (".concat(this.id, "): ").concat(this.name));
    };
    Technology.prototype.getReports = function () {
        console.log(this.reports);
    };
    Technology.prototype.addAdmin = function (admin) {
        this.admins.push(admin);
    };
    Technology.prototype.printAdminInformation = function () {
        console.log(this.admins.length, this.admins);
    };
    // Overriding //
    Technology.prototype.addEmployee = function (employee) {
        var id = Math.floor(Math.random() * 100);
        this.employees.push("".concat(id, ": ").concat(employee));
    };
    return Technology;
}(Department));
var technology = new Technology("Burnz Arc", []);
technology.addReport("Report Alpha");
technology.addReport("Report Beta");
console.log(technology.getLastReport);
technology.setLastReport = "Report Gamma";
console.log(technology.getLastReport);
technology.addAdmin("Vivy");
technology.addAdmin("Nero");
technology.addAdmin("Pearl");
technology.addEmployee("Riley");
technology.addEmployee("Taylor");
technology.describe();
technology.printEmployeeInformation();
technology.printAdminInformation();
technology.getReports();
console.log(technology);
