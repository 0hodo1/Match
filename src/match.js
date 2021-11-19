// images/teamone folder in player image count
var player1count = 24;
// images/teamtwo folder in player image count
var player2count = 24;

var play;
function start() {
  play = setInterval(function () {
    document.getElementsByTagName("h1")[0].innerHTML = "Matching...";
    var player1 = Math.round(Math.random() * player1count + 1);
    var player2 = Math.round(Math.random() * player2count + 1);
    var player1photo = document.getElementsByTagName("img")[0];
    var player2photo = document.getElementsByTagName("img")[1];
    player1photo.src = "./src/images/teamone/" + player1 + ".png";
    player2photo.src = "./src/images/teamtwo/" + player2 + ".png";
    document.getElementById("stopbutton").style.display = "inline";
    document.getElementById("startbutton").style.display = "none";
  }, 300);
}

function stop() {
  clearInterval(play);
  document.getElementById("startbutton").style.display = "inline";
  document.getElementById("stopbutton").style.display = "none";
  document.getElementsByTagName("h1")[0].innerHTML = "Matched!";
}

var startbutton = document.getElementById("startbutton").style.display;
if (startbutton === "inline") {
  document.getElementById("stopbutton").style.display = "none";
} else {
  startbutton = "inline";
}
