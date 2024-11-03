const form = document.querySelector('form');
const getButton = document.getElementById('get-data');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name === '' || email === '') {
    alert('Pls fill in all details');
  }

  if (localStorage.getItem('userName')) {
    const confirmed = confirm('Are you sure you want to change your username?');
    if (!confirmed) {
      return;
    }
  }

  localStorage.setItem('userName', name);
  localStorage.setItem('email', email);

  form.reset();
});

getButton.addEventListener('click', () => {
  const userName = localStorage.getItem('userName');

  if (!userName) {
    alert('User data does not exist');
  }

  const dataContainer = document.getElementById('data-container');

  const newPara = document.createElement('p');
  newPara.textContent = `Hello, ${userName}`;

  dataContainer.appendChild(newPara);
});
