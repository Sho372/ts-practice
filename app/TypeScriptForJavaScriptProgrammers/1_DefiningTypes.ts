const person = {
  name: "Hayes",
  id: 0,
};

interface User {
  name: string;
  id: number;
}

const user1: User = {
  name: "Hayes",
  id: 0,
};

interface User {
  name: string;
  id: number;
}

// const user2: User = {
//     username: "Hayes",
//     id: 0,
// }

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user3: User = new UserAccount("Murphy", 1);

function deleteUser(user: User) {
  console.log(`delete ${user}`);
}

// composing type

// union
type Mybool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

const ws: WindowStates = "open";

function getLength(obj: string | string[]) {
	if(typeof obj === "string") {
		return [obj];
	}
}

const strVal = "string desu"
console.log(getLength(strVal));

const strArr = "string arr desu"
console.log(getLength(strArr));

// Generics

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
	add: (obj: Type) => void;
	get: () => Type;
}

// Backpac未実装
declare const backpack: Backpack<string>;

const object = backpack.get();

// backpack.add(23)

// Structural Type System

interface Point {
	x: number;
	y: number;
}

function logPoint(p: Point) {
	console.log(`${p.x}, ${p.y}`)
}

const point = { x:12, y:26 }
logPoint(point)

