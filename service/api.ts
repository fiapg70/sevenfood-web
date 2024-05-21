// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9944/api/v1',
});

export const getProducts = () => api.get('/products');
export const createProduct = (product: any) => api.post('/products', product);
export const createCategory = (category: any) => api.post('/product-categories', category);
export const createRestaurant = (restaurant: any) => api.post('/restaurants', restaurant);
