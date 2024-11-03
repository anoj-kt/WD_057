const form = document.querySelector('form');
const ul = document.querySelector('ul');
const reloadBtn = document.getElementById('reload');

const submitHandler = (event) => {
  event.preventDefault();

  const userInput = event.target.elements.userInput.value;

  if (!userInput) {
    alert('Pls enter a quote!');
    return;
  }

  const myQuotes = JSON.parse(localStorage.getItem('myQuotes')) || [];

  const li = document.createElement('li');
  li.textContent = userInput;
  ul.insertBefore(li, ul.firstElementChild);

  myQuotes.unshift(userInput);

  localStorage.setItem('myQuotes', JSON.stringify(myQuotes));

  form.reset();
};

form.addEventListener('submit', submitHandler);

window.addEventListener('load', () => {
  const myQuotes = JSON.parse(localStorage.getItem('myQuotes')) || [];

  myQuotes.forEach((quote) => {
    const li = document.createElement('li');
    li.textContent = quote;
    ul.appendChild(li);
  });
});

reloadBtn.addEventListener('click', () => {
  window.location.reload();
});
