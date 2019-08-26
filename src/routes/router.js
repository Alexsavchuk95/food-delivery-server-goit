const products = require('./products/products');
const getId = require('./idGet/getId');
const mainRoute = require('./main/main');
const signUpRoute = require('./users/sing-up-route');

const router = {
  '/signup': signUpRoute,
  '/products':products,
  default: mainRoute
};

module.exports = router;