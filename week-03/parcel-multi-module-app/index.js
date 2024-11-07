import { fetchProducts } from './modules/network.js';
import { createProductCard } from './modules/ui.js';

window.addEventListener('load', async () => {
  const products = await fetchProducts();

  products.forEach((product) => {
    const productContainer = document.getElementById('product-container');
    const productCard = createProductCard(product);

    productContainer.appendChild(productCard);
  });
});
