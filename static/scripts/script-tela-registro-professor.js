select.addEventListener("change", function(){
  mudancaDeTela()
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
      criarNovosRegistros(element)
    });
    
$(".delete").click((registro) => {
  mostrarConfirmação()
  const tagRegistro = registro.target.parentElement.parentElement

  $("#voltar").click(()=>{
    esconderCofirmação()
    $("#back").attr("style", "display: none;")
  })
  
  
  $("#deletar").off().click(() => {
      const matricula = tagRegistro.getElementsByTagName('span')[0].innerText
      esconderCofirmação()

      deletarMatricula(matricula)
  })

})

    adicionarMatricula()
    
  })

function mudarPagina(matricula){
  console.log(matricula)
  window.location.href = `paginaDeEdiçãoDeCadastro-professor.html?matricula=${matricula}`
}

function mudancaDeTela(){
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
}

function criarNovosRegistros(element){
  const novoRegistro = registro.cloneNode(true);
  novoRegistro.style.display = "flex"
  novoRegistro.setAttribute("id", "registro")

  const span = adicionandoSpan(element)

  novoRegistro.appendChild(span)
  let label = novoRegistro.getElementsByClassName('professor')[0]
  label.innerHTML = element.nome
  containerRegistros.appendChild(novoRegistro)
}

function adicionandoSpan(element){
  const span = document.createElement('span')
  span.innerHTML = element.matricula
  span.style.display = "none"
  return span
}

function adicionarMatricula(){
  const listaRegistro =  document.getElementsByClassName('registro-classe')
  const edit = document.getElementsByClassName('edit')

  for(let i = 0; i<edit.length; i++){
    edit[i].addEventListener("click", function(){
      mudarPagina(listaRegistro[i].getElementsByTagName('span')[0].innerText)
    })
  }
 

}

function mostrarConfirmação(){
  $("#aviso_deletar").show(400, 'swing')
  $("#aviso_deletar").attr("style", "display: flex;")
  $("#back").attr("style", "display: block;")
}

function esconderCofirmação(){
  $("#aviso_deletar").hide()
  $("#back").attr("style", "display: none;")

  
}

function deletarMatricula(matricula){
  const baseUrl = "https://workinfit-api-production.up.railway.app/professor/deletar/"
  console.log(baseUrl+matricula)
    fetch(baseUrl+matricula, {
      method : "DELETE"
    })
      // 
    .then(response => {window.location.reload()})
    
}