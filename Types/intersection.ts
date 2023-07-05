// Intersection Types //

type Combinable = string | number;
type Numeric = number | boolean;

type Primitives = Combinable & Numeric;

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const Kaizer: ElevatedEmployee = {
    name: "Kaizer",
    privileges: ["create-server", "delete-server", "update-server"],
    startDate: new Date(),
};

console.log(Kaizer);
