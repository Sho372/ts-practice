// primitives: string, number and boolean

let myName: string = "Tom";
let myAge: number = 10;
let deleteFlg: boolean = false;

console.log(`myName: ${myName}, type: ${typeof myName}`)
console.log(`myAge: ${myAge}, type: ${typeof myAge}`)
console.log(`deleteFlg: ${deleteFlg}, type: ${typeof deleteFlg}`)

// Arrays
let numArr: number[] = [];
numArr.push(1);
numArr.push(2);
numArr.push(3);

let numArrReadOnly: readonly string[] = ["Monday", "Tuseday", "Wednesday", "Thurseday", "Friday", "Saturday"]; // Read only
//numArrReadOnly.push("Sunday")

let numArrInfer: number[] = [1,2,3]; // Type Inference

//any
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// Functions

// Parameter Type Annotations
function greetName(name: string) {
	console.log("Hello, " + name.toUpperCase() + "!!");
}

//greetName(42)
greetName("Bob")

