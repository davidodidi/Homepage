var counter = 0;
function updateCounter(){

if (document.getElementById('blue').checked) {
  counter++;
}

if (document.getElementById('age3').checked) {
  counter++;
}

if (document.getElementById('hobby2').checked) {
  counter++;
}

if (document.getElementById('game3').checked) {
  counter++;
}

if (document.getElementById('language4').checked) {
  counter++;
}
}

function clicked() {
  updateCounter()
  document.getElementById("result").innerHTML = "You got " + counter  + " / 5";
  //reset the counter back to zero after displaying score
  counter = 0
}