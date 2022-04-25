import React from "react";
import coffees from "./../data/coffees";
import CoffeeItem from "./CoffeeItem";
import { nanoid } from "nanoid";

const CoffeeList = () => {
  const addToBasketFn = (e) => {
    e.preventDefault();

    const { id, numberOfItems, dedication } = e.currentTarget.elements;

    const newBasketItem = {
      id: nanoid(),
      coffeeId: id.value,
      numberOfItems: Number(numberOfItems.value),
      dedication: dedication.value,
    };

    console.log(newBasketItem);
  };

  return (
    <ul className="CoffeeList">
      {coffees.map((coffee) => (
        <CoffeeItem
          key={coffee.id}
          data={coffee}
          addToBasketFn={addToBasketFn}
          // itemNumberGotChangedFn={(e) => console.log(e.target.value)}
          // basketGotClickedFn={() => console.log("basket got clicked")}
        />
      ))}
    </ul>
  );
};

export default CoffeeList;
