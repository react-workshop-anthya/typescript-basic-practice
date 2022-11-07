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
console.log("Direction1", Direction1.Left);
console.log("Direction2", Direction2.Left);
console.log("id", id);
console.log("x", x);
