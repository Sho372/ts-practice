var user = {
    name: "Hayes",
    id: 0,
};
var user1 = {
    name: "Hayes",
    id: 0,
};
// const user2: User = {
//     username: "Hayes",
//     id: 0,
// }
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user3 = new UserAccount("Murphy", 1);
function deleteUser(user) {
    console.log("delete ".concat(user));
}
var ws = "open";
function getLength(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
}
var strVal = "string desu";
console.log(getLength(strVal));
var strArr = "string arr desu";
console.log(getLength(strArr));
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
var point = { x: 12, y: 26 };
logPoint(point);
