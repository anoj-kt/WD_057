const userName = 'Shirin';

function sayHi() {
  console.log('Hello, I am Shirin');
}

const doNotExport = '';

//these are called Named exports. You can choose what you want to export.
export { userName, sayHi };
