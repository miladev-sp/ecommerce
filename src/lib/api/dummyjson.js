const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(limit = 20) {
  const result = await fetch(BASE_URL + `/products?limit=${limit}`, {
    next: { revalidate: 3600 },
  });

  const products = await result.json();
  return products;
}

export async function getProductById(id) {
  const result = await fetch(BASE_URL + `/products/${id}`, {
    next: { revalidate: 3600 },
  });
  const products = await result.json();
  return products;
}

export async function getCategories() {
  const result = await fetch(BASE_URL + "/products/categories", {
    next: { revalidate: 3600 },
  });
  const products = await result.json();
  return products;
}

export async function getProductsByCategory(category) {
  const result = await fetch(BASE_URL + `/products/category/${category}`, {
    next: { revalidate: 3600 },
  });
  const products = await result.json();
  return products;
}

export async function searchProducts(query) {
  const result = await fetch(BASE_URL + `/products/search?q=${query}`, {
    next: { revalidate: 3600 },
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
      { next: { revalidate: 3600 } },
    ),
  });
  const user = await result.json();
  return user;
}

export async function sortProducts(sort, limit) {
  const result = await fetch(
    BASE_URL + `/products?limit=${limit}&sortBy=${sort}`,
    { next: { revalidate: 3600 } },
  );
  const products = await result.json();
  return products;
}
