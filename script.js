const btnLogin = document.getElementById('btn-login');
const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const btnSend = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const formsDate = document.getElementById('evaluation-form');
const formsP = document.getElementById('form-p');
const firstName = document.getElementById('input-name');
const lastname = document.getElementById('input-lastname');
const eMail = document.getElementById('input-email');
const house = document.getElementById('house');
const radioFamily = document.getElementsByClassName('radio-f');
const materials = document.getElementsByClassName('subject');
const avalie = document.getElementsByClassName('radio-grade');
const obs = document.getElementById('textarea');
const main = document.getElementsByTagName('main')[0];
const formsOfForms = document.getElementById('form-data');
const bgColorFData = document.getElementById('form-data').style.backgroundColor;

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

function returns1Checked(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].checked) {
      return array[i].value;
    }
  }
}

function returns0to6Checked() {
  const result = [];
  for (let i = 0; i < materials.length; i += 1) {
    if (materials[i].checked) {
      result.push(` ${materials[i].value}`);
    }
  }
  return result;
}

const showForms = () => {
  main.style.justifyContent = 'space-evenly';
  formsP.innerText = `Nome: ${firstName.value} ${lastname.value}
  Email: ${eMail.value}
  Casa: ${house.value}
  Família: ${returns1Checked(radioFamily)}
  Matérias:${returns0to6Checked()}
  Avaliação: ${returns1Checked(avalie)}
  Observações: ${obs.value}`;
  formsP.style.width = '335px';
  formsP.style.overflowWrap = 'break-word';
  formsOfForms.style.padding = '20px';
  formsOfForms.style.backgroundColor = 'rgb(235, 235, 235)';
  formsOfForms.style.borderStyle = 'groove';
};

btnSend.addEventListener('click', (event) => {
  formsDate.style.display = 'none';
  event.preventDefault();
  showForms();
});
