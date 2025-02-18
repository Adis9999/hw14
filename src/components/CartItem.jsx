import React from "react";
import styled from "styled-components";

const CartItem = ({ name, price, image, quantity, onAdd, onRemove, onDelete }) => {
  return (
    <CartItemContainer>
      <CartImage src={image} alt={name} />
      <CartDetails>
        <CartName>{name}</CartName>
        <CartPrice>{price} сом</CartPrice>
        <Controls>
          <ControlButton onClick={onRemove}>-</ControlButton>
          <Quantity>{quantity}</Quantity>
          <ControlButton onClick={onAdd}>+</ControlButton>
        </Controls>
      </CartDetails>
      <DeleteButton onClick={onDelete}>🗑️</DeleteButton>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background-color:whitesmoke;
  border-radius: 10px;
`;

const CartImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 15px;
`;

const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CartName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: darkred;
`;

const CartPrice = styled.span`
  font-size: 14px;
  color: gray;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const ControlButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;


`;

const Quantity = styled.span`
  font-size: 16px;
`;

const DeleteButton = styled.button`
  background-color: #ef5252;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  font-size: 14px;


`;

export default CartItem;