// Types Guards => typeof, instanceof //

class Car {
    drive() {
        console.log("Driving A Car ...");
    }
}

class Truck {
    drive() {
        console.log("Driving A Truck ...");
    }

    loadCargo(amount: number) {
        console.log("Loading Cargo ... " + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(70000);
    }
}

useVehicle(v1);
useVehicle(v2);
