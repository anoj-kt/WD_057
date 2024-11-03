const form = document.getElementById('contact-form');
const outputPara = document.querySelector('#output');

const submitHandler = (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    outputPara.textContent = 'Please full in all fields';
    outputPara.classList.add('bg-red-400', 'text-black');
    return;
  }

  if (!email.includes('@gmail') && !email.includes('.')) {
    outputPara.textContent = 'Pls use gmail';
    outputPara.classList.add('bg-red-400', 'text-black');
    return;
  }

  const template = `
    <ul>
        <li> Name: ${name}</li>
        <li> Email: ${email}</li>
        <li> Message: ${message}</li>
    </ul>
  `;

  outputPara.innerHTML = template;
  outputPara.classList.add('text-black', 'bg-green-300');

  form.reset();
};

form.addEventListener('submit', submitHandler);
