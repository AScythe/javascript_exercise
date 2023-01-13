"use strict";

function movies_array() {
  return [
    ["1. Back to the Future (Trilogy)", "http://www.google1.com"],
    ["2. Donnie Darko", "http://www.google2.com"],
    ["3. Summer Time Machine Blues", "http://www.google3.com"],
    ["4. Interstellar", "http://wwww.google4.com"],
    ["5. FAQ About Time Travel", "http://wwww.google5.com"],
    ["6. 12 Monkeys", "http://wwww.google6.com"],
    ["7. Primer", "http://wwww.google7.com"],
    ["8. Edge of Tomorrow", "http://wwww.google8.com"],
    ["9. Groundhog Day", "http://wwww.google9.com"],
    ["10. The Time Machine (1960 and 2003)", "http://wwww.google10.com"]
  ]
}

function get_radio_value() {
  let movies = document.getElementsByName("movie");
  // alert(movies.length);
  movies.forEach(function (radio_btn) {
    // alert(radio_btn.value);
    if (radio_btn.checked) {
      location.href = radio_btn.value;
    }
  });
}

function load_remote_movies() {
  fetch("/scripts/list.json?no=1")
  .then(res => res.json())
  // .then(json_obj => alert(JSON.stringify(json_obj)));
  .then(json_resp => render_movies_radio_buttons(json_resp));

}

function render_movies_radio_buttons(json_resp) {
    // console.log(json_resp);
    // console.log(json_resp["movies"]);

  var new_radio_html = '';
  json_resp["movies"].forEach(function (movie) {
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
