const generalMiddlewareOne = (req, res, next) => {
  console.log('Middleware 1');
  req.username = 'anoj';
  next();
};

const generalMiddlewareTwo = (req, res, next) => {
  console.log('Middleware 2');
  req.username = 'anojt';
  next();
};

export { generalMiddlewareOne, generalMiddlewareTwo };
