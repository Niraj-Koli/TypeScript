// Property Decorator //

function Log(target: any, propertyName: string | Symbol) {
    console.log("Property Decorator");
    console.log(target);
    console.log(propertyName);
}

// Accessor Decorator //

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// Method Decorator //

function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// Parameter Decorator //

function Log4(target: any, name: string | Symbol, position: number) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid Price - Should be Positive!");
        }
    }

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}
