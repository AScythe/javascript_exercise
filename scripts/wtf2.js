"use strict";

function movies_array() {
  return [
    ["1. Back to the Future (Trilogy)", "http://1www.google.com"],
    ["2. Donnie Darko", "http://2www.google.com"],
    ["3. Summer Time Machine Blues", "http://3www.google.com"],
    ["4. Interstellar", "http://wwww.google.com"],
    ["5. FAQ About Time Travel", "http://wwww.google.com"],
    ["6. 12 Monkeys", "http://wwww.google.com"],
    ["7. Primer", "http://wwww.google.com"],
    ["8. Edge of Tomorrow", "http://wwww.google.com"],
    ["9. Groundhog Day", "http://wwww.google.com"],
    ["10. The Time Machine (1960 and 2003)", "http://wwww.google.com"]
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
  fetch("./movies.json")
  .then(res => res.json())
  .then(out => alert(out))
}

function render_movies_radio_buttons() {
  var new_radio_html = '';
  movies_array().forEach(function (movie_array) {
    // console.log(movie_array[0]);
    // console.log("==================");
    // console.log(movie_array[1]);
    // console.log("==================");
    let new_radio = ('<input type="radio" value="' + movie_array[1] + '" name="movie">' + movie_array[0] + '</input>');
    new_radio_html += new_radio + "<br/>";
  });
  document.getElementById("movies_radio_container").innerHTML = new_radio_html;
  // return new_radio_html
}

  // reference: https://stackoverflow.com/questions/118693/how-do-you-dynamically-create-a-radio-button-in-javascript-that-works-in-all-bro/119079#119079
