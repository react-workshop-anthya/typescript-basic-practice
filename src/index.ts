let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;

//  x: any -> x could be any type
let x: any = "Hello";
x = true;
x = 2;

// defined the type of obj in array
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

// err -> Hello: string, ids: number[]
// ids.push("Hello");
arr.push(false);

// Tuple
let person: [number, string, boolean] = [1, "John", true];
// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Cherry"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let pid: string | number = 22;
pid = 22;
pid = "33";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// objects
const user: {
  id: number;
  name: string;
} = {
  // err -> id:number != id:string
  // id: '1',
  id: 1,
  name: "John",
};

// type declaration
type User = {
  id: number;
  name: string;
};

const userFromUser: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid or
// -> let the type as number
let customerId = cid as number;

// Functions
// funcName(argument1 : argument type, argument2 : argument type): return type { scope }

function addNum(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
// key? : value -> optional property
// readonly key: value -> set the property readonly
interface UserInterface {
  id: number;
  readonly name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

// mutable value
user1.id = 5;
// user1.name = 'Mary' // cannot assign to name because it is a read-only property

// union could be used in type
type Point = number | string;
const p1: Point = 1;

// union could not be used in interface
// interface PointIn = number | string;
// const p1In = Point = 1;

// interface function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes

console.log(add(1, 2), sub(2, 1));

