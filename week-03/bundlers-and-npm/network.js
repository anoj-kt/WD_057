async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

const array = [1, 3, 5];

export { fetchProducts, array };

// module.exports = {
//   fetchProducts,
//   array,
// };
