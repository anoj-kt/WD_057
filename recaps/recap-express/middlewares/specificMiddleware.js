const middlewareOne = (req, res, next) => {
  console.log('In specific middleware');
  next();
};

const middlewareTwo = (req, res, next) => {
  console.log('In specific middleware2');
  next();
};

export { middlewareOne, middlewareTwo };
