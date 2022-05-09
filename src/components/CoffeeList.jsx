import React from "react";
import coffees from "./../data/coffees";
import CoffeeItem from "./CoffeeItem";

const CoffeeList = ({ addToBasketFn, isOrdered }) => {
  const ListTag = isOrdered ? "ul" : "ol";

  return (
    <ListTag className="CoffeeList">
      {coffees.map((coffee) => (
        <CoffeeItem
          key={coffee.id}
          data={coffee}
          addToBasketFn={addToBasketFn}
          // itemNumberGotChangedFn={(e) => console.log(e.target.value)}
          // basketGotClickedFn={() => console.log("basket got clicked")}
        />
      ))}
    </ListTag>
  );
};

export default CoffeeList;
