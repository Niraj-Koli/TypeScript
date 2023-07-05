// Types Guards => typeof, instanceof //
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving A Car ...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving A Truck ...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading Cargo ... " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(70000);
    }
}
useVehicle(v1);
useVehicle(v2);
