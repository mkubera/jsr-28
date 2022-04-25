import React from "react";

const CoffeeItem = ({
  data: { id, name, weight, price, imgUrl, isNew },
  addToBasketFn,
}) => {
  // const {id, name, weight, price, imgUrl} = data;

  return (
    <li>
      {isNew && <p>NOWOSC!</p>}

      <img src={imgUrl} alt={`opakowanie ${name}`} />
      <p>
        {name} ({weight}g)
      </p>
      <p>{price}zl</p>
      <div>
        <form onSubmit={addToBasketFn}>
          <input type="hidden" name="id" defaultValue={id} />
          <input type="number" name="numberOfItems" defaultValue={10} />
          <input type="text" name="dedication" defaultValue="For Marcin" />
          <button>dodaj do koszyka</button>
        </form>
      </div>
    </li>
  );
};

export default CoffeeItem;
