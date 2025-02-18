import React from "react";
import styled from "styled-components";

const PizzaItem = ({ name, price, image, onAdd }) => {
  return (
    <Item>
      <Image src={image} alt={name} />
      <Details>
        <Name>{name}</Name>
        <Price>{price} сом</Price>
        <AddButton onClick={onAdd}>Добавить</AddButton>
      </Details>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: whitesmoke;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 20px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Name = styled.h3`
  font-size: 18px;
  margin: 0 0 10px 0;
  color: darkred;
`;

const Price = styled.span`
  font-size: 16px;
  color: gray;
`;

const AddButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
`;

export default PizzaItem;
