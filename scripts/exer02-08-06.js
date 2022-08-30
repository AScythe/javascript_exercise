"use strict";

let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)

let b = prompt("First number?", 1);
let c = prompt("Second number?", 2);
alert(b + c); // 12

let d = prompt("First number?", 1);
let e = prompt("Second number?", 2);
alert(+d + +e); // 3