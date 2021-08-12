
var votoCand11 = 0;
var votoCand12 = 0;
var votoCand13 = 0;
var votoBranco = 0;
var votoNulo = 0;

function countVotes() {
  let voteSelect = document.querySelector("#idNumCand");
  
  voteSelect = Number(voteSelect.value);

  switch (voteEnter || voteSelect) {
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
  showResult()

  // limpar o nome e a foto do candidato
}

function countWhite() {
  votoBranco++

  showResult()
}

function showResult() {
  console.log({votoCand11});
  console.log({votoCand12});
  console.log({votoCand13});
  console.log({votoBranco});
  console.log({votoNulo});
  

}

// criar função limpar a tela - será chamado quando confirmar voto, voto em branco e btn-reset;