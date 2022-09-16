const btnLogin = document.getElementById('btn-login');
const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const btnSend = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function validation() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validation);

function enableCheckbox() {
  if (checkbox.checked) {
    btnSend.disabled = false;
  } else {
    btnSend.disabled = true;
  }
}

checkbox.addEventListener('click', enableCheckbox);

function counterCaracters() {
  const inputLength = textArea.value.length;

  counter.innerText = 500 - inputLength;
}

function cancelKeydown(event) {
  if (counter === 0) {
    event.preventDefault();
  }
}

textArea.addEventListener('input', counterCaracters);
counter.addEventListener('keydown', cancelKeydown);
