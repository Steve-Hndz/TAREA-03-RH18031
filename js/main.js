function paint1(n1) {
  document.getElementById("p1").className = "puntoAoff";
  document.getElementById("p2").className = "puntoAoff";
  document.getElementById("p3").className = "puntoAoff";
  document.getElementById("p4").className = "puntoAoff";
  document.getElementById("p5").className = "puntoAoff";
  document.getElementById("p6").className = "puntoAoff";
  document.getElementById("p7").className = "puntoAoff";
  document.getElementById("p8").className = "puntoAoff";
  document.getElementById("p9").className = "puntoAoff";

  if(n1 == 1) {
    document.getElementById("p5").className = "puntoAon";
  }
  else if(n1 == 2) {
    document.getElementById("p1").className = "puntoAon";
    document.getElementById("p9").className = "puntoAon";
  }
  else if(n1 == 3) {
    document.getElementById("p1").className = "puntoAon";
    document.getElementById("p5").className = "puntoAon";
    document.getElementById("p9").className = "puntoAon";
  }
  else if(n1 == 4) {
    document.getElementById("p1").className = "puntoAon";
    document.getElementById("p3").className = "puntoAon";
    document.getElementById("p7").className = "puntoAon";
    document.getElementById("p9").className = "puntoAon";
  }
  else if(n1 == 5) {
    document.getElementById("p1").className = "puntoAon";
    document.getElementById("p3").className = "puntoAon";
    document.getElementById("p5").className = "puntoAon";
    document.getElementById("p7").className = "puntoAon";
    document.getElementById("p9").className = "puntoAon";
  }
  else if(n1 == 6) {
    document.getElementById("p1").className = "puntoAon";
    document.getElementById("p3").className = "puntoAon";
    document.getElementById("p4").className = "puntoAon";
    document.getElementById("p6").className = "puntoAon";
    document.getElementById("p7").className = "puntoAon";
    document.getElementById("p9").className = "puntoAon";
  }
}

function paint2(n2) {
  document.getElementById("s1").className = "puntoBoff";
  document.getElementById("s2").className = "puntoBoff";
  document.getElementById("s3").className = "puntoBoff";
  document.getElementById("s4").className = "puntoBoff";
  document.getElementById("s5").className = "puntoBoff";
  document.getElementById("s6").className = "puntoBoff";
  document.getElementById("s7").className = "puntoBoff";
  document.getElementById("s8").className = "puntoBoff";
  document.getElementById("s9").className = "puntoBoff";

  if(n2 == 1) {
    document.getElementById("s5").className = "puntoBon";
  }
  else if(n2 == 2) {
    document.getElementById("s1").className = "puntoBon";
    document.getElementById("s9").className = "puntoBon";
  }
  else if(n2 == 3) {
    document.getElementById("s1").className = "puntoBon";
    document.getElementById("s5").className = "puntoBon";
    document.getElementById("s9").className = "puntoBon";
  }
  else if(n2 == 4) {
    document.getElementById("s1").className = "puntoBon";
    document.getElementById("s3").className = "puntoBon";
    document.getElementById("s7").className = "puntoBon";
    document.getElementById("s9").className = "puntoBon";
  }
  else if(n2 == 5) {
    document.getElementById("s1").className = "puntoBon";
    document.getElementById("s3").className = "puntoBon";
    document.getElementById("s5").className = "puntoBon";
    document.getElementById("s7").className = "puntoBon";
    document.getElementById("s9").className = "puntoBon";
  }
  else if(n2 == 6) {
    document.getElementById("s1").className = "puntoBon";
    document.getElementById("s3").className = "puntoBon";
    document.getElementById("s4").className = "puntoBon";
    document.getElementById("s6").className = "puntoBon";
    document.getElementById("s7").className = "puntoBon";
    document.getElementById("s9").className = "puntoBon";
  }
}

function randomize() {
  let n1 = Math.floor(Math.random() * 6) + 1;;
  let n2 = Math.floor(Math.random() * 6) + 1;;

  paint1(n1);
  paint2(n2);

  if(n1 > n2) {
    let audio = new Audio('./resources/sound1.mp3');
    audio.play();
    document.getElementById("titulo").innerHTML = "🏆 Jugador 1 ha ganado 🏆";
    document.getElementById("player1").innerHTML = "Jugador 1 🙋‍♂️";
    document.getElementById("player2").innerHTML = "Jugador 2 🙇‍♀️";
    document.getElementById("status").innerHTML = "🥇";
  }
  else if(n2 > n1) {
    let audio = new Audio('./resources/sound2.mp3');
    audio.play();
    document.getElementById("titulo").innerHTML = "🏆 Jugador 2 ha ganado 🏆";
    document.getElementById("player1").innerHTML = "Jugador 1‍ 🙇‍♂️";
    document.getElementById("player2").innerHTML = "Jugador 2 ‍🙋‍♀️";
    document.getElementById("status").innerHTML = "🥈";
  }
  else if(n1 == n2) {
    let audio = new Audio('./resources/draw.mp3');
    audio.play();
    document.getElementById("titulo").innerHTML = "🏆 Ambos ganan 🏆";
    document.getElementById("player1").innerHTML = "Jugador 1‍ ‍💁‍♂️";
    document.getElementById("player2").innerHTML = "Jugador 2 ‍‍💁‍♀️";
    document.getElementById("status").innerHTML = "👥";
  }
}

document.getElementById("boton").onclick = function() {
  randomize();
}
