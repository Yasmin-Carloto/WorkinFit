select.addEventListener("change", function(){
  var select = document.getElementById("select");
  var value = select.value;

  switch(value){
    case 'Aluno': 
      window.location.href = "telaRegistro-aluno.html";
      break;
    case 'Professor': 
      window.location.href = "telaRegistro-professor.html";
      break;
    default: 
      console.log("Inválido");
  }
})