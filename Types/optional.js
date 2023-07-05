// Optional Chaining //
var _a;
var fetchedUserData = {
    id: "u1",
    name: "Kaizer",
    job: { title: "Owner", description: "Epsilon City" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
