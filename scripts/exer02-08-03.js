"use strict"

// No effect on numbers
let x = 1;
alert( +x ); // 1

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
// does the same thing as Number(...)

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5
// alert( Number(apples) + Number(oranges) ); // 5