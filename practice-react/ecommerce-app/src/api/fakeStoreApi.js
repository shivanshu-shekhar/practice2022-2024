const BASE_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async () => {
  const response = await fetch(BASE_URL);
  return await response.json();
};
