// verifica se email e senha são corretos e exibe alerta
const email = document.getElementById('email');
const password = document.getElementById('password');
const btEnter = document.getElementById('enter');
btEnter.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Adiciona funcionalidade de caracteres restantes no text area
const text = document.getElementById('textarea');
const counter = document.getElementById('counter');
const maxChars = 500;
text.addEventListener('input', (e) => {
  const remainng = maxChars - e.target.value.length;
  counter.innerText = remainng;
});

// Funcionalidade de substituir formulario por informações preenchidas
const btSubmit = document.getElementById('submit-btn');
// eslint-disable-next-line max-lines-per-function
function fillInfo(e) {
  e.preventDefault();
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const inputemail = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const learns = document.querySelectorAll('input[name="learn"]:checked');
  let learnsValue = '';
  learns.forEach((elem) => { learnsValue += `${elem.value}, `; });
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const textarea = text.value;
  const form = document.getElementById('evaluation-form');
  form.innerHTML = '';
  const p = document.createElement('p');
  p.innerText = `Nome: ${name} ${lastName}
                Email: ${inputemail}
                Casa: ${house}
                Família: ${family}
                Matérias: ${learnsValue}
                Avaliação: ${rate}
                Observações: ${textarea}`;
  form.appendChild(p);
}

btSubmit.addEventListener('click', fillInfo);

// Habilita botão somente apos o check estiver marcado
const check = document.getElementById('agreement');
check.addEventListener('change', () => {
  if (!check.checked) {
    btSubmit.setAttribute('disabled', 'disabled');
  } else {
    btSubmit.removeAttribute('disabled');
  }
});
