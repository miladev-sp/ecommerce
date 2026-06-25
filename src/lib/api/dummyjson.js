const BASE_URL = "https://dummyjson.com";

export async function getProducts(limit = 20) {
  const result = await fetch(BASE_URL + `/products?limit=${limit}`, {
    cache: "force-cache",
  });

  const products = await result.json();
  return products;
}

export async function getProductById(id) {
  const result = await fetch(BASE_URL + `/products/${id}`, {
    cache: "force-cache",
  });
  const products = await result.json();
  return products;
}

export async function getCategories() {
  const result = await fetch(BASE_URL + "/products/categories", {
    cache: "force-cache",
  });
  const products = await result.json();
  return products;
}

export async function getProductsByCategory(category) {
  const result = await fetch(BASE_URL + `/products/category/${category}`, {
    cache: "force-cache",
  });
  const products = await result.json();
  return products;
}

export async function searchProducts(query) {
  const result = await fetch(BASE_URL + `/products/search?q=${query}`, {
    cache: "force-cache",
  });
  const products = await result.json();
  return products;
}

export async function loginUser(username, password) {
  const result = await fetch(BASE_URL + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      {
        username,
        password,
        expiresInMins: 30, // optional, defaults to 60
      },
      { cache: "force-cache" },
    ),
  });
  const user = await result.json();
  return user;
}

export async function sortProducts(sort, limit) {
  const result = await fetch(
    BASE_URL + `/products?limit=${limit}&sortBy=${sort}`,
    { cache: "force-cache" },
  );
  const products = await result.json();
  return products;
}
