"use strict";


// Response(
//   function json(){
//     // it converts response body(string) to JSON obj
//   }
// )
// res is the object

// json_obj is the json object

// function fetch(){
//   return {

//     function then() {
//       return this
//     }
//   }
// }


let x = "{'a': 'b'}"; // string
let x2 = {"a": "b"}; // json object

alert(x["a"])


function load_remote_movies() {
  fetch("/scripts/list.json?no=2")
    // .then(res => res.json())
    .then(function(res) {
      return res.json()
    }) // res - response 
    // .then(json_obj => alert(JSON.stringify(json_obj)));
    .then(json_obj => render_movies_radio_buttons(json_obj));

}

// res => res.json()
// is equal to
// function anonymous_function(res) {
//   return res.json()
// }

// what is ".then"? seems like it is also a function

function render_movies_radio_buttons(json_obj) {
  let fieldtext2 = document.getElementById("my-text").value;
  if (fieldtext2 == 'movies') {
    // console.log(json_obj);
    // console.log(json_obj["movies"]);
    let list = json_obj["movies"];
    generate_radio_button(list);
    // return;
  } else if (fieldtext2 == 'series') {
    // console.log(json_obj);
    // console.log(json_obj["series"]);
    let list = json_obj["series"];
    generate_radio_button(list);
    // return;
  }
}

// list.forEach(function (movie) - iterating the elements on the list

function generate_radio_button(list) {
  var new_radio_html = '';
  list.forEach(function (movie) {
  //   movie = {
  //     "no": 1,
  //     "name": "Back to the Future (Trilogy)",
  //     "url": "http://wtf1.com"
  // }
    // console.log(movie_array[0]);
    // console.log("==================");
    // console.log(movie_array[1]);
    // console.log("==================");
    let new_radio = ('<input type="radio" value="' + movie["url"] + '" name="movie">' + movie["no"] + ". " + movie["name"] + '</input>');
    new_radio_html += new_radio + "<br/>";
  });
  document.getElementById("movies_radio_container").innerHTML = new_radio_html;
  // return new_radio_html
}

// function render_movies_radio_buttons() {
//   var new_radio_html = '';
//   movies_array().forEach(function (movie_array) {
//     // console.log(movie_array[0]);
//     // console.log("==================");
//     // console.log(movie_array[1]);
//     // console.log("==================");
//     let new_radio = ('<input type="radio" value="' + movie_array[1] + '" name="movie">' + movie_array[0] + '</input>');
//     new_radio_html += new_radio + "<br/>";
//   });

//   document.getElementById("movies_radio_container").innerHTML = new_radio_html;
//   // return new_radio_html
// }

// reference: https://stackoverflow.com/questions/118693/how-do-you-dynamically-create-a-radio-button-in-javascript-that-works-in-all-bro/119079#119079


function get_radio_value() {
  let movies_html_elements = document.getElementsByName("movie");
  // alert(movies.length);

  // movies_html_elements = [
  //   <input type="radio" value="http://ssss" checked><input/>,
  //   <input type="radio">xxx<input/>
  // ]
  movies_html_elements.forEach(function (radio_btn) {
    // alert(radio_btn.value);
    if (radio_btn.checked) {
      location.href = radio_btn.value;
    }
  });
}

// location.href - change location