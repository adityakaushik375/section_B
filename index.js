import { add, mul, sub, div, person, area } from "./abcd.js";

let a = add(9, 6);
console.log(a);

let s = sub(7, 5);
console.log(s);

let m = mul(6, 6);
console.log(m);

let d = div(8, 4);
console.log(`The result of 8 divide by 4 is ${d}`);

console.log(person.age);

let ar = area(8, 9);
console.log(ar);


let marks = 90
let res = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 50 ? "C" : "Fail";

console.log(res);

