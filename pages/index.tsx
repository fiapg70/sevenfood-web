// pages/index.tsx
import { useEffect, useState } from 'react';
import { getProducts } from '../service/api';
import styles from '../styles/Home.module.css';

interface Product {
  id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  pic: string;
  productCategory: {
    id: number;
    name: string;
  };
  restaurant: {
    id: number;
    name: string;
    cnpj: string;
  };
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Produtos</h1>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <h2>{product.name}</h2>
            <p className={styles.productDetails}>Preço: R$ {product.price.toFixed(2)}</p>
            <p className={styles.productDetails}>Categoria: {product.productCategory.name}</p>
            <p className={styles.productDetails}>Restaurante: {product.restaurant.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
