"use strict";

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 2

let counter2 = 1;
let a = ++counter2; // (*)
alert(a); // 2
let b = counter2++; // (*) changed ++counter to counter++
alert(b); // 2

let counterpre = 0;
alert( ++counterpre ); // 1
alert( 2 * ++counterpre ); // 4

let counterpost = 1;
alert( counterpost++ ); // 1, because counter++ returns the "old" value
alert( 2 * counterpost++ ); // 4