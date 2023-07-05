// Class // + // Abstract Class//
abstract class Department {
    static fiscalYear = new Date().getFullYear(); // Static Property //
    // private readonly id: string;
    // public name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
    }

    // Static Method //
    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length, this.employees);
    }
}

// const marketing = new Department("Apollo Arc", "Marketing"); // Object //

// marketing.addEmployee("Christopher");
// marketing.addEmployee("Jofra");

// marketing.describe();
// marketing.printEmployeeInformation();
// console.log(marketing);

// const operating = { name: "Operating", describe: marketing.describe };
// operating.describe();

const Optimus = Department.createEmployee("Optimus");
console.log(Optimus, Department.fiscalYear);

// Inheritance //
class Technology extends Department {
    public admins: string[];
    private lastReport: string;
    private static instance: Technology;

    constructor(protected readonly id: string, private reports: string[]) {
        super(id, "Technology");
        this.lastReport = reports[0];
        this.admins = [];
    }

    // static getInstance() { // To Create More Instances Of A Single Class //
    //     if (this.instance) {
    //         return this.instance;
    //     }
    //     this.instance = new Technology("Burnz Arc", []);
    //     return this.instance;
    // }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    // Getter //
    get getLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Report Found.");
    }

    // Setter //
    set setLastReport(value: string) {
        if (!value) {
            throw new Error("Please Pass A Valid Value!");
        }
        this.addReport(value);
    }

    describe() {
        console.log(`Department: (${this.id}): ${this.name}`);
    }

    getReports() {
        console.log(this.reports);
    }

    addAdmin(admin: string) {
        this.admins.push(admin);
    }

    printAdminInformation() {
        console.log(this.admins.length, this.admins);
    }

    // Overriding //
    addEmployee(employee: string) {
        let id = Math.floor(Math.random() * 100);
        this.employees.push(`${id}: ${employee}`);
    }
}

const technology = new Technology("Burnz Arc", []);

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
