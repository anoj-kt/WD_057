console.log('This is the start of the script');
const usersContainer = document.getElementById('users-container');

const displayUsers = (allUsers = []) => {
  allUsers.forEach((user) => {
    const template = `
    <div class="shadow-md bg-sky-100 p-4 m-4">
    <p class="text-center mb-4">
      <span class="font-bold text-xl">${user.name}</span>
      <span class="text-xs">from ${user.address.city}</span>
    </p>
    <div class="bg-sky-300 p-4 rounded-md text-center">
      <p class="text-lg font-bold">Contact information</p>
      <p>Email: ${user.email}</p>
      <p>Tel: ${user.phone}</p>
    </div>
    </div>
    `;

    // usersContainer.innerHTML = usersContainer.innerHTML + template
    usersContainer.innerHTML += template;
  });
};

const displayError = (errorMessage) => {
  const errorPara = document.createElement('p');
  errorPara.classList.add('bg-red-400', 'p-2');
  errorPara.textContent = errorMessage;

  usersContainer.appendChild(errorPara);
};

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response);
    if (!response.ok) throw new Error('Server is down!');
    return response.json();
  })
  .then((data) => {
    console.log(data);
    displayUsers(data);
  })
  .catch((error) => {
    console.log(error);
    displayError('Something went wrong!');
  });

console.log('This is the end of the script');
