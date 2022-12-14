"use strict";

function question1() {
  let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

  if (year < 2015) {
    alert('Too early...');
  } else if (year > 2015) {
    alert('Too late');
  } else {
    alert('Exactly!');
  }
}

function show() {
  let x = document.getElementById("my-text")
  alert(x.value)
}

function movies() {
  return `Movies
      1. Back to the Future (Trilogy)
      2. Donnie Darko
      3. Summer Time Machine Blues
      4. Interstellar
      5. FAQ About Time Travel
      6. 12 Monkeys
      7. Primer
      8. Edge of Tomorrow
      9. Groundhog Day
      10. The Time Machine (1960 and 2003)`;
}

function tvseries() {
  return `TV series
        1. Dark
        2. Steins;Gate
        3. Boku Dake Ga Inai Machi`
}

function shortfilms() {
  return `Short Films (mostly youtube videos)
      1. One-Minute Time Machine - Sploid
      2. This Is Why Eating Healthy Is Hard (Time Travel Dietician) - Funny Or Die
      3. Exit Strategy - Omeleto
      4. Chrono Perambulator - gavdoff
      5. CTRL Z - DUST
      6. Dirty Machines: The End of History - Short of the Week
      7. Time - TROPFEST
      8. Echo/Back - The Time Travel Virus - Torchborne Screens
      9. Timeless - Planet Froth
      10. Interview With A Time Traveler - DUST`
}

function others() {
  return `Others
    Time Travel Might Be Real ? !?
    1. Proof of Time Travel Pat McAfee Show
    Time Travel Movie Guide
  1. Time Travel in Fiction Rundown - minutephysics`
}

function show_alert(msg) {
  alert("Here are the Best Time Travel " + msg)
}

function show_movies() {
  show_alert(movies())
}

function show_tvseries() {
  show_alert(tvseries())
}

function show_shortfilms() {
  show_alert(shortfilms())
}

function show_others() {
  show_alert(others())
}

function change_content(arg1, arg2) {
  let x = document.getElementById("div_1"); // get the html element namely div_1
  x.innerHTML = arg1 + "--" + arg2;
  // x.innerHTML = '<input value="newnewnew" />'
}

function change(arg1) {
  let x = document.getElementById("div_1"); // get the html element namely div_1
  x.innerHTML = arg1;
}


function request_text() {
  let fieldtext = document.getElementById("my-text").value;
  // alert(fieldtext);
  if (fieldtext == 'movies') {
    let movies_list = movies().replace(/\n/g, "<br/>");
    let div1 = document.getElementById("div_1");
    div1.innerHTML = movies_list;
    // return;
  } else if (fieldtext == 'series') {
    let series_list = tvseries().replace(/\n/g, "<br/>");
    let div1 = document.getElementById("div_1");
    div1.innerHTML = series_list;
    // return;
  } else if (fieldtext == 'shorts') {
    let shorts_list = shortfilms().replace(/\n/g, "<br/>");
    let div1 = document.getElementById("div_1");
    div1.innerHTML = shorts_list;
    // return;
  } else {
    let others = fieldtext
    let div1 = document.getElementById("div_1")
    div1.innerHTML = others
    return;
  }
  // alert(1); // to test how else if and return works
}

function redirect() {
  location.href = "http://www.google.com";
}
