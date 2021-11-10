const email = document.getElementsByName('email');
const password = document.getElementsByName('password');
const btEnter = document.getElementById('enter');
btEnter.addEventListener('click', () => {
  if (email[0].value === 'tryber@teste.com' && password[0].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function entrar() {
  const check = document.getElementById('agreement');
  check.addEventListener('change', () => {
    if (!check.checked) {
      document
        .getElementById('submit-btn')
        .setAttribute('disabled', 'disabled');
    } else {
      document.getElementById('submit-btn').removeAttribute('disabled');
    }
  });
}

entrar();
