import { cache } from "react";

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

export async function getProductsByCategory(category, limit) {
  const result = await fetch(
    BASE_URL + `/products/category/${category}?limit=${limit}`,
    {
      cache: "force-cache",
    },
  );
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
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30, // optional, defaults to 60
    }),
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

export const getFilteredProductss = cache(
  async ({
    category = "",
    sort = "rating",
    order = "asc",
    page = 1,
    limit = 12,
    search = "",
  }) => {
    const skip = (page - 1) * limit;
    const params = `limit=${limit}&skip=${skip}&sortBy=${sort}&order=${order}`;

    let url = `${BASE_URL}/products?${params}`;

    if (search) {
      url = `${BASE_URL}/products/search?q=${search}&${params}`;
    } else if (category) {
      url = `${BASE_URL}/products/category/${category}?${params}`;
    }
    const result = await fetch(url);
    const data = await result.json();
    return data;
  },
);

export async function getProductsList() {
  const result = await fetch("https://dummyjson.com/products/category-list");
  return await result.json();
}
