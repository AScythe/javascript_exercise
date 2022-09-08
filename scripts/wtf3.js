"use strict";

function render_movies_radio_buttons2() {
    var new_radio_html2 = '';
    movies_array().forEach(function (movie_array) {
      // console.log(movie_array[0]);
      // console.log("==================");
      // console.log(movie_array[1]);
      // console.log("==================");
      let new_radio2 = ('<input type="radio" value="' + movie_array[1] + '" name="movie">' + movie_array[0] + '</input>');
      new_radio_html2 += new_radio2 + "<br/>";
    });
    // document.getElementById("movies_radio_container").innerHTML = new_radio_html2;
    return new_radio_html2
  }

function simply_list() {
    var list_final = ""
    movies_array().forEach(function (movie_array) {
      let list_initial = movie_array[0];
      list_final += list_initial + "<br/>";
    });
    // document.getElementById("movies_list_container").innerHTML = a;
    return list_final
  }

// function request_text2() {
//   let fieldtext2 = document.getElementById("my-text").value;
//   // alert(fieldtext2);
//   if (fieldtext2 == 'movies') {
//     // let movies_list = movies().replace(/\n/g, "<br/>");
//     let movies_list2 = simply_list();
//     movies_list2 = "Movies" + "<br/>" + movies_list2
//     let div1 = document.getElementById("movies_list_container");
//     div1.innerHTML = movies_list2;
//     return;
//   }
// }
  
function request_text2() {
    let fieldtext2 = document.getElementById("my-text").value;
    // alert(fieldtext2);
    if (fieldtext2 == 'movies') {
      let movies_list2 = render_movies_radio_buttons2();
      movies_list2 = "Movies" + "<br/>" + movies_list2
      let div1 = document.getElementById("movies_list_container");
      div1.innerHTML = movies_list2;
      return;
    }
  }