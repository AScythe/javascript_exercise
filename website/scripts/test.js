"use strict";

// function test(){
//   alert("1")
// }

// // test 1

// let x = "a";

// function xxx() {
//   let x = "b";
//   alert(x);
// }

// function xxx2() {
//   let x = "c";
//   alert(x);
// }

// xxx(); // this will give b
// xxx2(); // this will give c
// alert(x); // this will give a

// test 2
let x = "a";

function xxx(x) {
  x = "b";
  let x = "c";
}

x = "d";
xxx(x);  // this is c
alert(x); // what is x now? this is b?