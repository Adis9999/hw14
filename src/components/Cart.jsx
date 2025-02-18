import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = ({ cart, totalPrice, onAdd, onRemove, onDelete }) => {
  return (
    <CartContainer>
      <CartTitle>Ваш заказ</CartTitle>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onAdd={() => onAdd(item.id)}
          onRemove={() => onRemove(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      ))}
      <TotalPrice>Итого: {totalPrice} сом</TotalPrice>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #d4d4d4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const CartTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TotalPrice = styled.h3`
  font-size: 20px;
  text-align: right;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid whitesmoke;
  color: black;
`;

export default Cart;