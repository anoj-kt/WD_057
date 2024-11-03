function multiplyByFour(num) {
  if (isNaN(num)) {
    console.error('Please enter a number');
    return;
  }

  //Eg: changes '5' to 5
  num = parseFloat(num);

  //Eg: 5 * 5
  return num * 4;
}

const arguments = process.argv.slice(2);
console.log('process.argv BEFORE slice: ', process.argv);
console.log('process.argv AFTER slice: ', arguments);

const number = arguments[0];
console.log(multiplyByFour(number));
