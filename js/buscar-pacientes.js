var botaoAdicionar = document.querySelector('#buscar-pacientes')

botaoAdicionar.addEventListener('click', function () {
  var xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

  xhr.addEventListener('load', function () {
    var erroAjax = document.querySelector('#erro-ajax')
    erroAjax.classList.add('invisivel')
    if (xhr.status == 200) {
      var pacientes = JSON.parse(xhr.responseText)

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente)
      })
    } else {
      erroAjax.classList.remove('invisivel')
    }
  })
  xhr.send()
})
