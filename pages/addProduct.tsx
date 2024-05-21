import { useState, ChangeEvent, FormEvent } from 'react';
import { createProduct } from '../service/api';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    pic: '',
    productCategoryId: 0,
    restaurantId: 0,
  });

  const handleProductChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === 'price' || name === 'productCategoryId' || name === 'restaurantId' ? Number(value) : value,
    });
  };

  const handleSubmitProduct = async (e: FormEvent) => {
    e.preventDefault();
    await createProduct(product);
    alert('Produto cadastrado com sucesso!');
  };

  return (
    <div>
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmitProduct}>
        <input type="text" name="name" placeholder="Nome" onChange={handleProductChange} />
        <input type="text" name="description" placeholder="Descrição" onChange={handleProductChange} />
        <input type="number" step="0.01" name="price" placeholder="Preço" onChange={handleProductChange} />
        <input type="text" name="pic" placeholder="Imagem" onChange={handleProductChange} />
        <input type="number" name="productCategoryId" placeholder="ID da Categoria" onChange={handleProductChange} />
        <input type="number" name="restaurantId" placeholder="ID do Restaurante" onChange={handleProductChange} />
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
};

export default AddProduct;
