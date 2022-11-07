"use strict";
let id = 5;
let company = "Traversy Media";
let isPublished = true;
//  x: any -> x could be any type
let x = "Hello";
x = true;
x = 2;
// defined the type of obj in array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
// err -> Hello: string, ids: number[]
// ids.push("Hello");
arr.push(false);
// Tuple
let person = [1, "John", true];
// Tuple Array
let employee;
employee = [
    [1, "Cherry"],
    [2, "John"],
    [3, "Jill"],
];
// Union
let pid = 22;
pid = 22;
pid = "33";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// objects
const user = {
    // err -> id:number != id:string
    // id: '1',
    id: 1,
    name: "John",
};
const userFromUser = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid or
// -> let the type as number
let customerId = cid;
// Functions
// funcName(argument1 : argument type, argument2 : argument type): return type { scope }
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
// mutable value
user1.id = 5;
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
console.log(add(1, 2), sub(2, 1));
