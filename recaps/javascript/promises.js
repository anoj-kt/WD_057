//Creating a promise
const myOwnPromise = new Promise((resolve, reject) => {
  //ternary operator
  Math.random() > 0.5
    ? resolve({ name: 'Anoj', email: 'anoj@gmail.com' })
    : reject('Promise failed');

  //   if(Math.random() > 0.5) {
  //     resolve('Resolved')
  //   } else {
  //     reject('Promise failed')
  //   }
});

myOwnPromise
  .then((resolvedValue) => console.log(resolvedValue)) //runs when resolved / fulfilled
  .catch((rejectedValue) => console.log(rejectedValue)); //runs when rejected

function displayUsers(users) {
  // Dom Manipulation
}

function displayError(error) {
  //Show error to the user
}

//Promises with .then and .catch
const promiseFromFetching = fetch('https://jsonplaceholder.typicode.com/users');
promiseFromFetching
  .then((response) => response.json())
  .then((data) => displayUsers(data))
  .catch((error) => displayError(error));

//Promises with async / await
const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    displayUsers(data);
  } catch (error) {
    displayError(error);
  }
};

fetchUsers();
