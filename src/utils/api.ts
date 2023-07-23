export const getProducts = async () =>
  fetch('https://fakestoreapi.com/products').then((res) => res.json())

export const getProduct = async (id) =>
  fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
