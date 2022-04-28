import React from "react";
import coffees from "./../data/coffees";

const Basket = ({ basket }) => {
  const coffeeName = (coffeeId) =>
    coffees.find((coffee) => coffee.id === coffeeId).name;

  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {basket.map(({ id, coffeeId, numberOfItems }) => (
          <li key={id}>
            Coffee {coffeeName(coffeeId)} (x{numberOfItems})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
