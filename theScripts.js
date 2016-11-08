// Last updated: 2015-07-06

function Horario() {
    	var Hoje = new Date(); 
    	var Horas = Hoje.getHours(); 
    	if(Horas < 10){ 
      		Horas = "0"+Horas; 
    	} 
    	var Minutos = Hoje.getMinutes(); 
    	if(Minutos < 10){ 
      		Minutos = "0"+Minutos; 
    	} 
    	var Segundos = Hoje.getSeconds(); 
    	if(Segundos < 10){ 
      		Segundos = "0"+Segundos; 
    	} 
		document.getElementById("Clock").innerHTML = Horas + ":" + Minutos + ":" +Segundos; 
} 
window.setInterval("Horario()",1000);

function isEmpty(lc) {
  if (document.getElementById(lc).innerHTML == "") {
    return true;
  } else {
    return false;
  }
}

var jogadas = 0;
function JogoDaVelha(lin, col) {
	var lc = lin + col;
  if (isEmpty(lc)) {

    if (jogadas % 2 == 0) {
      document.getElementById(lc).innerHTML = "X";
    } else {
      document.getElementById(lc).innerHTML = "O";
    }
    jogadas++;
    var umUm = document.getElementById(11).innerHTML;
    var umDois = document.getElementById(12).innerHTML;
    var umTres = document.getElementById(13).innerHTML;
    var doisUm = document.getElementById(21).innerHTML;
    var doisDois = document.getElementById(22).innerHTML;
    var doisTres = document.getElementById(23).innerHTML;
    var tresUm = document.getElementById(31).innerHTML;
    var tresDois = document.getElementById(32).innerHTML;
    var tresTres = document.getElementById(33).innerHTML;
    if (jogadas > 4) {
      if (umUm == "X" && umDois == "X" && umTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (doisUm == "X" && doisDois == "X" && doisTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (tresUm == "X" && tresDois == "X" && tresTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umUm == "X" && doisUm == "X" && tresUm == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umDois == "X" && doisDois == "X" && tresDois == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umTres == "X" && doisTres == "X" && tresTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umUm == "X" && doisDois == "X" && tresTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umTres == "X" && doisDois == "X" && tresUm == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      } else
      <!-- Jogador O -->
      if (umUm == "O" && umDois == "O" && umTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (doisUm == "O" && doisDois == "O" && doisTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (tresUm == "O" && tresDois == "O" && tresTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umUm == "O" && doisUm == "O" && tresUm == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umDois == "O" && doisDois == "O" && tresDois == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umTres == "O" && doisTres == "O" && tresTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umUm == "O" && doisDois == "O" && tresTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umTres == "O" && doisDois == "O" && tresUm == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (jogadas == 9) {
        //alert("Empate!\nDeu velha!");
        document.getElementById("message").innerHTML = "Empate! Deu Velha!<br>";
      }
    }
  }
}

function Reset() {
  document.getElementById(11).innerHTML = "";
  document.getElementById(12).innerHTML = "";
  document.getElementById(13).innerHTML = "";
  document.getElementById(21).innerHTML = "";
  document.getElementById(22).innerHTML = "";
  document.getElementById(23).innerHTML = "";
  document.getElementById(31).innerHTML = "";
  document.getElementById(32).innerHTML = "";
  document.getElementById(33).innerHTML = "";
  document.getElementById("message").innerHTML = "";
  jogadas = 0;
  cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

var cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
function JogoDaVelhaCPU(lin, col) {
  var lc = lin + col;

  if (isEmpty(lc)) {
    var rand;
    var vazio = false;

    document.getElementById(lc).innerHTML = "X";

    if (lin == 1) {
      if (col == 1) {
        cells[0] = "X";
      } else if (col == 2) {
        cells[1] = "X";
      } else {
        cells[2] = "X";
      }
    } else if (lin == 2) {
      if (col == 1) {
        cells[3] = "X";
      } else if (col == 2) {
        cells[4] = "X";
      } else {
        cells[5] = "X";
      }
    } else if (lin == 3) {
      if (col == 1) {
        cells[6] = "X";
      } else if (col == 2) {
        cells[7] = "X";
      } else {
        cells[8] = "X";
      }
    }
    jogadas++;

    if (jogadas < 8) {
      do {
        rand = Math.floor(Math.random()*9);

        if (cells[rand] == 0) {
          vazio = true;
          if (rand == 0) {
            cells[0] = "O";
            document.getElementById(11).innerHTML = "O";
          } else if (rand == 1) {
              cells[1] = "O";
              document.getElementById(12).innerHTML = "O";
          } else if (rand == 2) {
              cells[2] = "O";
              document.getElementById(13).innerHTML = "O";
          } else if (rand == 3) {
              cells[3] = "O";
              document.getElementById(21).innerHTML = "O";
          } else if (rand == 4) {
              cells[4] = "O";
              document.getElementById(22).innerHTML = "O";
          } else if (rand == 5) {
              cells[5] = "O";
              document.getElementById(23).innerHTML = "O";
          } else if (rand == 6) {
            cells[6] = "O";
            document.getElementById(31).innerHTML = "O";
          } else if (rand == 7) {
            cells[7] = "O";
            document.getElementById(32).innerHTML = "O";
          } else if (rand == 8) {
            cells[8] = "O";
            document.getElementById(33).innerHTML = "O";
          } 
        }
      } while (vazio == false);
      
      jogadas++;
    }
    
    var umUm = document.getElementById(11).innerHTML;
    var umDois = document.getElementById(12).innerHTML;
    var umTres = document.getElementById(13).innerHTML;
    var doisUm = document.getElementById(21).innerHTML;
    var doisDois = document.getElementById(22).innerHTML;
    var doisTres = document.getElementById(23).innerHTML;
    var tresUm = document.getElementById(31).innerHTML;
    var tresDois = document.getElementById(32).innerHTML;
    var tresTres = document.getElementById(33).innerHTML;
    if (jogadas > 4) {
      if (umUm == "X" && umDois == "X" && umTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (doisUm == "X" && doisDois == "X" && doisTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (tresUm == "X" && tresDois == "X" && tresTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umUm == "X" && doisUm == "X" && tresUm == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umDois == "X" && doisDois == "X" && tresDois == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umTres == "X" && doisTres == "X" && tresTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umUm == "X" && doisDois == "X" && tresTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umTres == "X" && doisDois == "X" && tresUm == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      } else
      <!-- Jogador O -->
      if (umUm == "O" && umDois == "O" && umTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (doisUm == "O" && doisDois == "O" && doisTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (tresUm == "O" && tresDois == "O" && tresTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umUm == "O" && doisUm == "O" && tresUm == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umDois == "O" && doisDois == "O" && tresDois == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umTres == "O" && doisTres == "O" && tresTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umUm == "O" && doisDois == "O" && tresTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umTres == "O" && doisDois == "O" && tresUm == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (jogadas == 9) {
        document.getElementById("message").innerHTML = "Empate! Deu Velha!<br>";
      }
    }
  }
}

//arrumar
function JogoDaVelhaHC(lin, col) {
  var lc = lin + col;

  if (isEmpty(lc)) {
    var rand;
    var vazio = false;

    document.getElementById(lc).innerHTML = "X";

    if (lin == 1) {
      if (col == 1) {
        cells[0] = "X";
      } else if (col == 2) {
        cells[1] = "X";
      } else {
        cells[2] = "X";
      }
    } else if (lin == 2) {
      if (col == 1) {
        cells[3] = "X";
      } else if (col == 2) {
        cells[4] = "X";
      } else {
        cells[5] = "X";
      }
    } else if (lin == 3) {
      if (col == 1) {
        cells[6] = "X";
      } else if (col == 2) {
        cells[7] = "X";
      } else {
        cells[8] = "X";
      }
    }
    jogadas++;

    if (jogadas == 1) {
      if (cells[0] == "X") {
        cells[4] = "O";
        document.getElementById(22).innerHTML = "O";
      }
      if (cells[1] == "X") {
        cells[4] = "O";
        document.getElementById(22).innerHTML = "O";
      }
      if (cells[2] == "X") {
        cells[4] = "O";
        document.getElementById(22).innerHTML = "O";
      }
      if (cells[3] == "X") {
        cells[4] = "O";
        document.getElementById(22).innerHTML = "O";
      }
      if (cells[4] == "X") {
        cells[0] = "O";
        document.getElementById(11).innerHTML = "O";
      }
      if (cells[5] == "X") {
        cells[4] = "O";
        document.getElementById(22).innerHTML = "O";
      }
      if (cells[6] == "X") {
        cells[4] = "O";
        document.getElementById(22).innerHTML = "O";
      }
      if (cells[7] == "X") {
        cells[4] = "O";
        document.getElementById(22).innerHTML = "O";
      }
      if (cells[8] == "X") {
        cells[4] = "O";
        document.getElementById(22).innerHTML = "O";
      }
      jogadas++;
    } else 
        if (jogadas == 3) {
          if (cells[0] == "X") {
            if (cells[1] == "X") {
              cells[2] = "O";
              document.getElementById(13).innerHTML = "O";
            } else if (cells[2] == "X") {
              cells[1] = "O";
              document.getElementById(12).innerHTML = "O";
            } else if (cells[3] == "X") {
              cells[6] = "O";
              document.getElementById(31).innerHTML = "O";
            } else if (cells[8] == "X") {
              cells[7] = "O";
              document.getElementById(32).innerHTML = "O";  
            } else if (cells[6] == "X") {
              cells[3] = "O";
              document.getElementById(21).innerHTML = "O";  
            } else if (cells[5] == "X") {
              cells[6] = "O";
              document.getElementById(31).innerHTML = "O";
            } else if (cells[7] == "X") {
              cells[2] = "O";
              document.getElementById(13).innerHTML = "O";
            }
          } else
          if (cells[1] == "X") {
            if (cells[0] == "X") {
              cells[2] = "O";
              document.getElementById(13).innerHTML = "O";  
            } else if (cells[2] == "X") {
              cells[0] = "O";
              document.getElementById(11).innerHTML = "O";  
            }
          } else
          if (cells[2] == "X") {
            if (cells[0] == "X") {
              cells[1] = "O";
              document.getElementById(12).innerHTML = "O";  
            } else if (cells[8] == "X") {
              cells[5] = "O";
              document.getElementById(23).innerHTML = "O";  
            } else if (cells[6] == "X") {
              cells[3] = "O";
              document.getElementById(21).innerHTML = "O";  
            }
          } else
          if (cells[3] == "X") {
            if (cells[6] == "X") {
              cells[0] = "O";
              document.getElementById(11).innerHTML = "O";
            } else {
              cells[4] = "O";
              document.getElementById(22).innerHTML = "O";
            }
          } else
          if (cells[4] == "X") {
            cells[0] = "O";
            document.getElementById(11).innerHTML = "O";
          } else
          if (cells[5] == "X") {
            cells[6] = "O";
            document.getElementById(31).innerHTML = "O";
          } else
          if (cells[6] == "X") {
            if (cells[8] == "X") {
              cells[2] = "O";
              document.getElementById(13).innerHTML = "O";
            }
          } else
          if (cells[7] == "X") {
            if (cells[0] == "X") {
              cells[2] = "O";
              document.getElementById(12).innerHTML = "O";
            }
            
          } else  
          if (cells[8] == "X") {
            cells[6] = "O";
            document.getElementById(31).innerHTML = "O";
          }
          jogadas++;
        }

/*  if (jogadas < 8) {
    do {
      rand = Math.floor(Math.random()*9);

      if (cells[rand] == 0) {
        vazio = true;
        if (rand == 0) {
          cells[0] = "O";
          document.getElementById(11).innerHTML = "O";
        } else if (rand == 1) {
            cells[1] = "O";
            document.getElementById(12).innerHTML = "O";
        } else if (rand == 2) {
            cells[2] = "O";
            document.getElementById(13).innerHTML = "O";
        } else if (rand == 3) {
            cells[3] = "O";
            document.getElementById(21).innerHTML = "O";
        } else if (rand == 4) {
            cells[4] = "O";
            document.getElementById(22).innerHTML = "O";
        } else if (rand == 5) {
            cells[5] = "O";
            document.getElementById(23).innerHTML = "O";
        } else if (rand == 6) {
          cells[6] = "O";
          document.getElementById(31).innerHTML = "O";
        } else if (rand == 7) {
          cells[7] = "O";
          document.getElementById(32).innerHTML = "O";
        } else if (rand == 8) {
          cells[8] = "O";
          document.getElementById(33).innerHTML = "O";
        } 
      }
    } while (vazio == false);
    
    jogadas++;
  }*/
  
    var umUm = document.getElementById(11).innerHTML;
    var umDois = document.getElementById(12).innerHTML;
    var umTres = document.getElementById(13).innerHTML;
    var doisUm = document.getElementById(21).innerHTML;
    var doisDois = document.getElementById(22).innerHTML;
    var doisTres = document.getElementById(23).innerHTML;
    var tresUm = document.getElementById(31).innerHTML;
    var tresDois = document.getElementById(32).innerHTML;
    var tresTres = document.getElementById(33).innerHTML;
    if (jogadas > 4) {
      if (umUm == "X" && umDois == "X" && umTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (doisUm == "X" && doisDois == "X" && doisTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (tresUm == "X" && tresDois == "X" && tresTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umUm == "X" && doisUm == "X" && tresUm == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umDois == "X" && doisDois == "X" && tresDois == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umTres == "X" && doisTres == "X" && tresTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umUm == "X" && doisDois == "X" && tresTres == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      }
      else if (umTres == "X" && doisDois == "X" && tresUm == "X") {
        document.getElementById("message").innerHTML = "Jogador X ganhou o jogo!";
      } else
      <!-- Jogador O -->
      if (umUm == "O" && umDois == "O" && umTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (doisUm == "O" && doisDois == "O" && doisTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (tresUm == "O" && tresDois == "O" && tresTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umUm == "O" && doisUm == "O" && tresUm == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umDois == "O" && doisDois == "O" && tresDois == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umTres == "O" && doisTres == "O" && tresTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umUm == "O" && doisDois == "O" && tresTres == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (umTres == "O" && doisDois == "O" && tresUm == "O") {
        document.getElementById("message").innerHTML = "Jogador O ganhou o jogo!";
      }
      else if (jogadas == 9) {
        document.getElementById("message").innerHTML = "Empate! Deu Velha!<br>";
      }
    }
  }
}
