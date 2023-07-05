// Index Properties //

interface Validatable {
    [prop: string]: string;
}

const validater: Validatable = {
    email: "Not A Valid Email!",
    username: "Must Start With A Character!",
    password: "Must Be At Least 7 Characters!",
};

console.log(validater);
