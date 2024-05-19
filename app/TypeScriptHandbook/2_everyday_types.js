// primitives: string, number and boolean
var myName = "Tom";
var myAge = 10;
var deleteFlg = false;
console.log("myName: ".concat(myName, ", type: ").concat(typeof myName));
console.log("myAge: ".concat(myAge, ", type: ").concat(typeof myAge));
console.log("deleteFlg: ".concat(deleteFlg, ", type: ").concat(typeof deleteFlg));
// Arrays
var numArr = [];
numArr.push(1);
numArr.push(2);
numArr.push(3);
var numArrReadOnly = ["Monday", "Tuseday", "Wednesday", "Thurseday", "Friday", "Saturday"]; // Read only
//numArrReadOnly.push("Sunday")
var numArrInfer = [1, 2, 3]; // Type Inference
//any
var obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n = obj;
