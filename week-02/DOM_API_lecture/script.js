//Accessing an element
const parasUsingTagName = document.getElementsByTagName('p');
// console.log(parasUsingTagName);

const parasUsingQuerySelector = document.querySelector('#first-para');
// console.log(parasUsingQuerySelector);

const firstPara = document.getElementById('first-para');
firstPara.id = 'newID';
firstPara.textContent = 'This is now changed';
firstPara.style.backgroundColor = 'red';
firstPara.classList.add('p-4', 'text-white');

//Creating an Element
const newPara = document.createElement('p');
newPara.textContent = 'This is a new para';
newPara.classList.add('bg-orange-400', 'p-4');
newPara.id = 'new-para';
console.log(newPara);

const paraContainer = document.getElementById('para-container');
paraContainer.appendChild(newPara);

const button = document.getElementById('alert-button');
button.addEventListener('click', () => {
  console.log('I got clicked');
  alert('You clicked the green button!');
});

const nameInput = document.getElementById('name');
function changeHandler(event) {
  console.log(event.target.value);
}
nameInput.addEventListener('change', changeHandler);
