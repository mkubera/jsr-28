import "./App.css";
// import CoffeeList from "./components/CoffeeList";
// import ChuckJoke from "./components/ChuckJoke";
// import Basket from "./components/Basket";
import React from "react";
// import React, { useState } from "react";
// import { nanoid } from "nanoid";
// import Loading from "./class-components/Loading";
import Counter from "./class-components/Counter";

const App = () => {
  // const [basket, setBasket] = useState([]);

  // const addToBasketFn = (e) => {
  //   e.preventDefault();

  //   const { id, numberOfItems, dedication } = e.currentTarget.elements;

  //   const newBasketItem = {
  //     id: nanoid(),
  //     coffeeId: id.value,
  //     numberOfItems: Number(numberOfItems.value),
  //     dedication: dedication.value,
  //   };

  //   console.log(newBasketItem);
  //   setBasket((oldBasket) => [...oldBasket, newBasketItem]);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Counter init={3} />
        <Counter init={13} />
        <Counter init={103} />
        {/* <Loading />
        <ChuckJoke />
        <CoffeeList addToBasketFn={addToBasketFn} isOrdered={!true} />
        <Basket basket={basket} /> */}
      </header>
    </div>
  );
};

export default App;
