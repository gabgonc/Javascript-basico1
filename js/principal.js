var titulo = document.querySelector('.titulo')
titulo.textContent = 'Nutricionista Aparecida'

var pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  var tdPeso = paciente.querySelector('.info-peso')
  var peso = tdPeso.textContent

  var tdAltura = paciente.querySelector('.info-altura')
  var altura = tdAltura.textContent

  var tdImc = paciente.querySelector('.info-imc')
  var pesovalido = true
  var alturavalida = true
  if (peso <= 0 || peso >= 1000) {
    console.log('peso inválido.')
    pesovalido = false
    tdImc.textContent = 'Peso não é válido!!'
    paciente.classList.add('paciente-invalido')
    ///alert('Peso não é válido!!')
  }
  if (altura <= 0 || altura >= 3.0) {
    console.log('altura inválida.')
    alturavalida = false
    tdImc.textContent = 'Altura não é válida!!'
    paciente.classList.add('paciente-invalido')
    ///alert('Altura não é válida!!')
  }

  if (pesovalido && alturavalida) {
    var imc = peso / (altura * altura)
    tdImc.textContent = imc.toFixed(2)
  }
}

var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')

  var nome = form.nome.value
  var peso = form.peso.value
  var altura = form.altura.value
  var gordura = form.gordura.value

  var pacienteTr = document.createElement('tr')

  var nomeTd = document.createElement('td')
  var pesoTd = document.createElement('td')
  var alturaTd = document.createElement('td')
  var gorduraTd = document.createElement('td')
  var imcTd = document.createElement('td')

  nomeTd.textContent = nome
  pesoTd.textContent = peso
  alturaTd.textContent = altura
  gorduraTd.textContent = gordura

  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  var tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)
})
