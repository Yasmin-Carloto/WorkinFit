function pegarMatricula(){
    const urlParams = new URLSearchParams(window.location.search);
    let numeroMatricula = urlParams.get('matricula')
    return numeroMatricula
}

function pegarDados(matricula){
    const dadosMatricula = fetch(`https://workinfit-api-production.up.railway.app/professor/buscar/${matricula}`)
        .then(response => response.json())
        .then(data => {
            const resultados = data.results

            const nome = resultados.nome
            // const telefone = resultados.telefone
            const email = resultados.email
            const cpf = resultados.cpf
            const cep = resultados.cep
            const rua = resultados.rua
            const bairro = resultados.bairro
            const complemento = resultados.complemento
            const senha = resultados.senha
            const confirmacao = resultados.confirmacao

            inserirDados(nome, email, cpf, cep, rua, bairro, complemento, senha, confirmacao)

        })
        .catch(error => {
            console.log(error)});
}

function inserirDados(nomeDado, emailDado, cpfDado, cepDado, ruaDado, bairroDado, complementoDado, senhaDado, confirmacaoDado){
    const nome = document.getElementById('nome')
    const telefone = document.getElementById('telefone')
    const email = document.getElementById('email')
    const cpf = document.getElementById('cpf')
    const cep = document.getElementById('cep')
    const rua = document.getElementById('rua')
    const bairro = document.getElementById('bairro')
    const complemento = document.getElementById('complemento')
    const senha = document.getElementById('senha')
    const confirmacao = document.getElementById('confirmacao')

    nome.value = nomeDado
    // telefone.value = telefoneDado
    email.value = emailDado
    cpf.value = cpfDado
    cep.value = cepDado
    rua.value = ruaDado
    bairro.value = bairroDado
    complemento.value = complementoDado
    senha.value = senhaDado
    // confirmacao.value = confirmacaoDado

    console.log(senha.value)
    // console.log(confirmacao.value)
}

function inserirMatricula(div, matricula){
    const matriculaLabel = document.getElementById(`${div}`)
    matriculaLabel.innerText += " " + matricula
}

window.addEventListener("load", function(){
    const matricula = pegarMatricula()
    pegarDados(matricula)
    inserirMatricula("selecao", matricula)

    const formPreenchido = document.getElementById('form-container')
    formPreenchido.addEventListener('submit', function(e){
        e.preventDefault()
        atualizarDados(formPreenchido)
        window.location.href = "telaRegistro-professor.html"
    })
})

function atualizarDados(form){  
    const matricula = pegarMatricula()
    const senha = document.getElementById('senha')
    const confirmacao = document.getElementById('confirmacao')
    console.log(form)

    if(matricula && senha.value && confirmacao.value && senha.value === confirmacao.value){

        const formData = new FormData(form)
        
        fetch(`https://workinfit-api-production.up.railway.app/professor/atualizar/${matricula}`, {
          method: "POST",
          body: formData, 
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .then(error => console.log(error))
    
          alert("Cadastro alterado com sucesso!")
      }else{
        alert("Senha e confirmação de senha precisam ser iguais.")
      }
}