const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(limit = 20) {
  const result = await fetch(BASE_URL + `/products?limit=${limit}`);

  const products = await result.json();
  return products;
}

export async function getProductById(id) {
  const result = await fetch(BASE_URL + `/products/${id}`);
  const products = await result.json();
  return products;
}

export async function getCategories() {
  const result = await fetch(BASE_URL + "/products/categories");
  const products = await result.json();
  return products;
}

export async function getProductsByCategory(category) {
  const result = await fetch(BASE_URL + `/products/category/${category}`);
  const products = await result.json();
  return products;
}

export async function searchProducts(query) {
  const result = await fetch(BASE_URL + `/products/search?q=${query}`);
  const products = await result.json();
  return products;
}

export async function loginUser(username, password) {
  const result = await fetch(BASE_URL + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30, // optional, defaults to 60
    }),
  });
  const user = await result.json();
  return user;
}
