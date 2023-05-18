select.addEventListener("change", function(){
    var select = document.getElementById("select");
    var value = select.value;

    switch(value){
      case 'Aluno': 
      alert("Você já está no cadastro do aluno.")
      break;
      case 'Professor': 
        window.location.href = "telaRegistro-professor.html";
        break;
      default: 
        console.log("Inválido");
    }
})

const registro = document.getElementById('registro')
const registroLabel = document.getElementById('aluno')
const containerRegsitros = document.getElementById('container-registros')
const lista = [1,2,3,4,5,6]
for(let i = 0; i<lista.length; i++){
  const novoRegistro = registro.cloneNode(true);
  containerRegsitros.appendChild(novoRegistro);
  registroLabel.innerHTML = "Marcos Daniel"
}