//Setting an item
localStorage.setItem('name', 'Robin');
localStorage.setItem('email', 'robin@gmail.com');
localStorage.setItem('number', 500);

//Getting an item
const userName = localStorage.getItem('name');
const number = localStorage.getItem('number');
console.log(userName);
console.log(typeof number);

//Removing a single item
localStorage.removeItem('email');

//Clearing all items
// localStorage.clear();

//Setting an array or object as localstorage value
const skills = ['javascript', 'html', 'css'];
const user = {
  firstName: 'anoj',
  email: 'anoj@gmail.com',
  hobbies: ['coding', 'surfing'],
};

localStorage.setItem('skills', JSON.stringify(skills));
localStorage.setItem('user', JSON.stringify(user));

const skillsInLocalStorage = localStorage.getItem('skills');
const skillsArray = JSON.parse(skillsInLocalStorage);

const userInLocalStorage = localStorage.getItem('user');
const userObject = JSON.parse(userInLocalStorage);

//Spread operator
const newSkillsArray = [...skillsArray, 'git', 'github', 'teamworking', 'css'];
console.log(newSkillsArray);

const newUserObject = {
  ...userObject,
  password: 'PW123',
  isAdmin: true,
  firstName: 'Matteus',
  email: 'matt@gmail.com',
};
console.log(newUserObject);
