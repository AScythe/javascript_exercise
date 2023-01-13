"use strict";

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
alert( n ); // 14

let m = 2;
m *= 3 + 5; // right part evaluated first, same as n *= 8
alert( m ); // 16