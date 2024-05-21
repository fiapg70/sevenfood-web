// pages/add.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import { createRestaurant } from '../service/api';

const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({ name: '', cnpj: '' });

  const handleRestaurantChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmitRestaurant = async (e: FormEvent) => {
    e.preventDefault();
    await createRestaurant(restaurant);
    alert('Restaurante cadastrado com sucesso!');
  };

  return (
    <div>
      <h1>Adicionar Restaurante</h1>
      <form onSubmit={handleSubmitRestaurant}>
        <input type="text" name="name" placeholder="Nome do Restaurante" onChange={handleRestaurantChange} />
        <input type="text" name="cnpj" placeholder="CNPJ do Restaurante" onChange={handleRestaurantChange} />
        <button type="submit">Cadastrar Restaurante</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
