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
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log("id", id);
console.log("x", x);
