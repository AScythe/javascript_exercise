"use strict";

function load_remote_movies() {
  fetch("/scripts/list.json?no=2")
    .then(res => res.json())
    // .then(json_obj => alert(JSON.stringify(json_obj)));
    .then(json_resp => render_movies_radio_buttons(json_resp));

}

function render_movies_radio_buttons(json_resp) {
  let fieldtext2 = document.getElementById("my-text").value;
  if (fieldtext2 == 'movies') {
    // console.log(json_resp);
    // console.log(json_resp["movies"]);
    let list = json_resp["movies"];
    generate_radio_button(list);
    // return;
  } else if (fieldtext2 == 'series') {
    // console.log(json_resp);
    // console.log(json_resp["series"]);
    let list = json_resp["series"];
    generate_radio_button(list);
    // return;
  }
}

function generate_radio_button(list) {
  var new_radio_html = '';
  list.forEach(function (movie) {
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
  let movies = document.getElementsByName("movie");
  // alert(movies.length);
  movies.forEach(function (radio_btn) {
    // alert(radio_btn.value);
    if (radio_btn.checked) {
      location.href = radio_btn.value;
    }
  });
}