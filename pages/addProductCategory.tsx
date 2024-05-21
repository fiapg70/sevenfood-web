// pages/add.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import { createCategory } from '../service/api';

const AddProductCategory = () => {
  const [category, setCategory] = useState({ name: '' });

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmitCategory = async (e: FormEvent) => {
    e.preventDefault();
    await createCategory(category);
    alert('Categoria cadastrada com sucesso!');
  };


  return (
    <div>
      <h1>Adicionar Categoria</h1>
      <form onSubmit={handleSubmitCategory}>
        <input type="text" name="name" placeholder="Nome da Categoria" onChange={handleCategoryChange} />
        <button type="submit">Cadastrar Categoria</button>
      </form>
    </div>
  );
};

export default AddProductCategory;
