"use strict";

function question1(){
  let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

  if (year < 2015) {
    alert( 'Too early...' );
  } else if (year > 2015) {
    alert( 'Too late' );
  } else {
    alert( 'Exactly!' );
  }
}

function movies(){
  alert(
    `Movies
      1. Back to the Future (Trilogy)
      2. Donnie Darko
      3. Summer Time Machine Blues
      4. Interstellar
      5. FAQ About Time Travel
      6. Twelve Monkeys
      7. Primer
      8. About Time
      9. Edge of Tomorrow
      10. Groundhog Day`
    )
}

function tvseries(){
  alert(
    `TV series
        1. Dark
        2. Steins;Gate
        3. Boku Dake Ga Inai Machi`
  )
}

function shortfilms(){
  alert(
    `Short Films (mostly youtube videos)
      1. One-Minute Time Machine - Sploid
      2. This Is Why Eating Healthy Is Hard (Time Travel Dietician) - Funny Or Die
      3. Exit Strategy - Omeleto
      4. Chrono Perambulator - gavdoff
      5. Dirty Machines: The End of History - Short of the Week
      6. Time - TROPFEST
      7. CTRL Z - DUST
      8. Echo/Back - The Time Travel Virus - Torchborne Screens
      9. A Single Life - Job, Joris & Marieke
      10. Timeless - Planet Froth`
  )
}

function others(){
  alert(
    `Time Travel Might Be Real?!?
      1. Proof of Time Travel Pat McAfee Show
    
    Time Travel Movie Guide<br/>
      1. Time Travel in Fiction Rundown - minutephysics`
  )
}
function show() {
  let x = document.getElementById("my-text")
  alert(x.value)
}