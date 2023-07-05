// Optional Chaining //

const fetchedUserData = {
    id: "u1",
    name: "Kaizer",
    job: { title: "Owner", description: "Epsilon City" },
};

console.log(fetchedUserData?.job?.title);
