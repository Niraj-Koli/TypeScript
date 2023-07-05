// Discriminated Union //
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving At Speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 1000 });
moveAnimal({ type: "horse", runningSpeed: 2000 });
