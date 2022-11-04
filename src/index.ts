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
  Up,
  Down,
  Left,
  Right,
}

console.log("Direction1", Direction1.Up);

console.log("id", id);
console.log("x", x);
