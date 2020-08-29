var email = ""

function alerta(email) {
    email = document.getElementById('email').value;
  alert('O email ' + email + ' foi enviado');
  return email.nodeValue
}