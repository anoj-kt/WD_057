//Imagine you have these values from input fields (Using DOM API)
const firstName = 'Anoj';
const email = 'anoj@gmail.com';

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     firstName,
//     email,
//     userId: 'abc',
//   }),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//--------

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        email,
        userId: 'abc',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};

fetchData;
