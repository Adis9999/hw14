import React, { useState } from "react";
import styled from "styled-components";
import PizzaItem from "./PizzaItem";
import Cart from "./Cart";

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([
    {
      id: 1,
      name: "Пепперони",
      price: 465,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61Dk4xw9ZewwskIN_euedD7OAaikbPk0hAw&s",
      quantity: 0,
    },
    {
      id: 2,
      name: "Бургер",
      price: 160,
      image: "https://chefrestoran.ru/wp-content/uploads/2018/10/604655519.jpg",
      quantity: 0,
    },
    {
      id: 3,
      name: "Fuse Tea",
      price: 89,
      image: "https://www.coca-cola.com/content/dam/onexp/kz/ru/home-images/brands/brand-fusetea/desktop/fusetea-mango-pineapple_d.jpg",
      quantity: 0,
    },
    {
      id: 4,
      name: "Картошка фри",
      price: 215,
      image: "https://www.patee.ru/r/x6/15/8b/e2/960m.jpg",
      quantity: 0,
    },
  ]);

  const handleAdd = (id) => {
    setPizzas((prev) =>
      prev.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  const handleRemove = (id) => {
    setPizzas((prev) =>
      prev.map((pizza) =>
        pizza.id === id && pizza.quantity > 0
          ? { ...pizza, quantity: pizza.quantity - 1 }
          : pizza
      )
    );
  };

  const handleDelete = (id) => {
    setPizzas((prev) =>
      prev.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: 0 } : pizza
      )
    );
  };

  const cart = pizzas.filter((pizza) => pizza.quantity > 0);

  const totalPrice = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.quantity,
    0
  );

  return (
    <Container>
      <PizzaContainer>
        {pizzas.map((pizza) => (
          <PizzaItem
            key={pizza.id}
            {...pizza}
            onAdd={() => handleAdd(pizza.id)}
          />
        ))}
      </PizzaContainer>
      <Cart
        cart={cart}
        totalPrice={totalPrice}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onDelete={handleDelete}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  background-color: #f1f1f1;
  height: 620px;
`;

const PizzaContainer = styled.div`
  flex: 1;
`;

export default PizzaList;