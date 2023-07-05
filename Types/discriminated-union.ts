// Discriminated Union //

interface Bird {
    type: "bird";
    flyingSpeed: number;
}

interface Horse {
    type: "horse";
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed: number;
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
