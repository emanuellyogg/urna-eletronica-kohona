var votoCand11 = 0;
var votoCand12 = 0;
var votoCand13 = 0;
var votoBranco = 0;
var votoNulo = 0;

function countVotes() {
  let voteSelect = document.querySelector("#idNumCand");
  voteSelect = Number(voteSelect.value);

  switch (voteSelect) {
    case 11:
      votoCand11++
      break;
    case 12:
      votoCand12++
      break;
    case 13:
      votoCand13++
      break;      
    default:
      if (voteSelect == "") {
        votoBranco++
      } else {
        votoNulo++
      }
      break;
  }
  showResult();
  limparTela();
}

function countWhite() {
  votoBranco++
  showResult();
  limparTela();
}

function showResult() {
  let totalCand11 = document.querySelector("#showResCand11");
  totalCand11.innerHTML = `Jiraiya Sensei: ${votoCand11}` ;

  let totalCand12 = document.querySelector("#showResCand12");
  totalCand12.innerHTML = `Kakashi Hatake: ${votoCand12}` ;

  let totalCand13 = document.querySelector("#showResCand13");
  totalCand13.innerHTML = `Shikamaru Nara: ${votoCand13}` ;

  let totalBranco = document.querySelector("#showResWhite");
  totalBranco.innerHTML = `Votos em Branco: ${votoBranco}` ;

  let totalNulo = document.querySelector("#showesNullo");
  totalNulo.innerHTML = `Votos Nulo: ${votoNulo}` ;
}

function fotoCandidato() {
  let numCand = document.querySelector("#idNumCand");  
  numCand = Number(numCand.value);
  let foto;
  let candidato;

  switch (numCand) {
    case 11:
      foto = "jiraiya.jpg";
      candidato = "Jiraiya Sensei";
      break;
    case 12:
      foto = "kakashi.jpg";
      candidato = "Kakashi Hatake";
      break;
    case 13:
      foto = "shikamaru.jpg";
      candidato = "Shikamaru Nara";
      break;      
    default:
      if (numCand == "") {
        foto = "branco.png";
      candidato = "Voto em Branco";
      } else {
        foto = "nulo.png";
      candidato = "Voto Nulo";
      }
      break;
  }

  let img = document.querySelector("#imgCandidate");
  img.src = "images/" + foto;

  let nomeCand = document.querySelector("#NmCandidato");
  nomeCand.value = candidato;
}

function limparTela(){
  document.querySelector("#NmCandidato").value = "";
  document.querySelector("#imgCandidate").src = "images/candidato00.jpg";
  document.querySelector("#idNumCand").value = "";
}