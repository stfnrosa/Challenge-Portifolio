let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputAssunto = document.getElementById("assunto");
let inputMensagem = document.getElementById("mensagem");

function validarFormulario() {
  if (inputNome.value == "") {
    alert('O campo "Nome" não pode ser vazio');
    return false;
  }

  if (inputEmail.value == "") {
    alert('O campo "Email" não pode ser vazio');
    return false;
  }

  if (inputAssunto.value == "") {
    alert('O campo "Assunto" não pode ser vazio');
    return false;
  }

  if (inputMensagem.value == "") {
    alert('O campo "Mensagem" não pode ser vazio');
    return false;
  }

  return true;
}