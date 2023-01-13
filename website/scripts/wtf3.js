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

function series_array() {
  return [
    ["1. Dark", "http://1www.google.com"],
    ["2. Steins;Gate", "http://2www.google.com"],
    ["3. Boku Dake Ga Inai Machi", "http://3www.google.com"]
  ]
}


function change_content(arg1, arg2) {
  let x = document.getElementById("div_1"); // get the html element namely div_1
  x.innerHTML = arg1 + "--" + arg2;
  // x.innerHTML = '<input value="newnewnew" />'
}

function render_movies_radio_buttons2() {
  let fieldtext2 = document.getElementById("my-text").value;
  // alert(fieldtext2);
  if (fieldtext2 == 'movies') {
    var new_radio_html2 = '';
    movies_array().forEach(function (movie_array) {
      let new_radio2 = ('<input type="radio" value="' + movie_array[1] + '" name="movie">' + movie_array[0] + '</input>');
      new_radio_html2 += new_radio2 + "<br/>";
    });
    // document.getElementById("movies_radio_container").innerHTML = new_radio_html2;
    return new_radio_html2
  } else if (fieldtext2 == 'series') {
    var new_radio_html2 = '';
    series_array().forEach(function (serie_array) {
      let new_radio2 = ('<input type="radio" value="' + serie_array[1] + '" name="movie">' + serie_array[0] + '</input>');
      new_radio_html2 += new_radio2 + "<br/>";
    });
    // document.getElementById("movies_radio_container").innerHTML = new_radio_html2;
    return new_radio_html2
  }
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
    } else if (fieldtext2 == 'series') {
      let series_list2 = render_movies_radio_buttons2();
      series_list2 = "Series" + "<br/>" + series_list2
      let div1 = document.getElementById("movies_list_container");
      div1.innerHTML = series_list2;
      return;
    }
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