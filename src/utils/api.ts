export const getProducts = async () =>
  fetch('https://fakestoreapi.com/products').then((res) => res.json())
