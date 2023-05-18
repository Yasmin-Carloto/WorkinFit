select.addEventListener("change", function(){
    var select = document.getElementById("select");
    var value = select.value;

    switch(value){
      case 'Aluno': 
        window.location.href = "telaRegistro-aluno.html";
        break;
      case 'Professor': 
        alert("Você já está no cadastro do professor.")
        break;
      default: 
        console.log("Inválido");
    }
})

const registro = document.getElementById('registro')
registro.setAttribute("id", "registroAntigo")
const registroLabel = document.getElementById('professor')
const containerRegistros = document.getElementById('container-registros')

fetch('https://workinfit-api-production.up.railway.app/professor/buscar')
  .then(response => response.json())
  .then(data => {
    const lista = data.results
    console.log(lista)

    lista.forEach(element => {
      const novoRegistro = registro.cloneNode(true);
      novoRegistro.style.display = "flex"
      novoRegistro.setAttribute("id", "registro")
      const span = document.createElement('span')
      span.innerHTML = element.matricula
      span.style.display = "none"
      novoRegistro.appendChild(span)
      let label = novoRegistro.getElementsByClassName('professor')[0]
      label.innerHTML = element.nome
      containerRegistros.appendChild(novoRegistro)
    });

    const listaRegistro =  document.getElementsByClassName('registro-classe')
    const edit = document.getElementsByClassName('edit')

    for(let i = 0; i<edit.length; i++){
      edit[i].addEventListener("click", function(){
        mudarPagina(listaRegistro[i].getElementsByTagName('span')[0].innerText)
      })
    }
    
  })

function mudarPagina(matricula){
  console.log(matricula)
  window.location.href = `paginaDeEdiçãoDeCadastro-professor.html?matricula=${matricula}`

}