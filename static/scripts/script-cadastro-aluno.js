select.addEventListener("change", function(){
  var select = document.getElementById("select");
  var value = select.value;

  switch(value){
    case 'Aluno': 
      alert("Você já está no cadastro do aluno.")
      break;
    case 'Professor': 
    window.location.href = "telaDeCadastroProfessor.html";
    break;
    default: 
      console.log("Inválido");
  }
})


const form = document.getElementById('form-container')
const submit = document.getElementById('enviar')

form.addEventListener("submit", function(e){
e.preventDefault()

const senha = document.getElementById('senha')
const confirmacao = document.getElementById('confirmacao')

if(senha.value && confirmacao.value && senha.value === confirmacao.value){

  const formData = new FormData(form)
  
  fetch('https://workinfit-api-production.up.railway.app/professor/novo', {
    method: "POST",
    body: formData, 
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(error => console.log(error))

    alert("Cadastro realizado!")
}else{
  alert("Senha e confirmação de senha precisam ser iguais.")
}
})