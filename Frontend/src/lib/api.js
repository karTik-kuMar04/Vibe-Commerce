const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/api/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const fetchCart = async () => {
  const response = await fetch(`${API_BASE_URL}/api/cart`);
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  return response.json();
};

export const addToCart = async (productId, qty = 1) => {
  const response = await fetch(`${API_BASE_URL}/api/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, qty }),
  });
  if (!response.ok) {
    throw new Error('Failed to add to cart');
  }
  return response.json();
};

export const removeFromCart = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/cart/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to remove from cart');
  }
  return response.json();
};

export const checkout = async (checkoutData) => {
  const response = await fetch(`${API_BASE_URL}/api/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(checkoutData),
  });
  if (!response.ok) {
    throw new Error('Failed to checkout');
  }
  return response.json();
};
