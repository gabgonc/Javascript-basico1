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
  var pesovalido = validaPeso(peso)
  var alturavalida = validaAltura(altura)

  if (!pesovalido) {
    console.log('peso inválido.')
    pesovalido = false
    tdImc.textContent = 'Peso não é válido!!'
    paciente.classList.add('paciente-invalido')
    ///alert('Peso não é válido!!')
  }
  if (!alturavalida) {
    console.log('altura inválida.')
    alturavalida = false
    tdImc.textContent = 'Altura não é válida!!'
    paciente.classList.add('paciente-invalido')
    ///alert('Altura não é válida!!')
  }

  if (pesovalido && alturavalida) {
    var imc = calculaImc(peso, altura)
    tdImc.textContent = imc
  }
}

function validaGordura(gordura) {
  if (gordura >= 0 && gordura <= 80) {
    return true
  } else return false
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true
  } else {
    return false
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true
  } else {
    return false
  }
}

function calculaImc(peso, altura) {
  var imc = 0
  imc = peso / (altura * altura)
  return imc.toFixed(2)
}
