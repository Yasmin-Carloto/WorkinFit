select.addEventListener("change", function(){
    var select = document.getElementById("select");
    var value = select.value;

    switch(value){
      case 'Aluno': 
        alert("Você já está na página de cadastro de aluno.")
        break;
      case 'Professor': 
      window.location.href = "";
        break;
      default: 
        console.log("Inválido");
    }
})

// function enviar (){
//   const form = document.getElementById('form-container')
//   const senha = document.getElementById('senha')
//   const confirmacao = document.getElementById('confirmacao')

//   console.log(form)

//   if(senha.value && confirmacao.value && senha.value === confirmacao.value){
//     console.log(form)

//     fetch('http://httpbin.org/post', {
//       method: "POST",
//       body: form, 
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .then(error => console.log(error))

//       alert("Cadastro realizado!")
//   }else{
//     alert("Senha e confirmação de senha precisam ser iguais.")
//   }

// }


const form = document.getElementById('form-container')
const submit = document.getElementById('enviar')

// function enviarDados(){
//   const XHR = new XMLHttpRequest();
//   const formData = new FormData(form);

//   XHR.open("POST", "https://example.com/cors.php");
//   XHR.send(formData)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .then(error => console.log(error))
  
// }

// form.addEventListener("submit", function(e){
//   e.preventDefault

//   enviarDados()
// })

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