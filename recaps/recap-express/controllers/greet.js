const generalGreet = (req, res) => {
  res.send('Hello world!');
};

const greetWithName = (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}`);
};

const greetWithNameAndEmail = (req, res) => {
  const { name, email } = req.body;
  res.send(`Hello ${name}. Your email is ${email}`);
};

export { generalGreet, greetWithName, greetWithNameAndEmail };
