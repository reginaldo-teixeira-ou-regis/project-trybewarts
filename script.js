const btnLogin = document.getElementById('btn-login');
const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');

function validation() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validation);
