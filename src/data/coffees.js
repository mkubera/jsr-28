import { nanoid } from "nanoid";

const coffees = [
  {
    id: nanoid(),
    name: "Salwador Carlos Pola",
    weight: 250,
    price: 45,
    imgUrl:
      "https://nieczapla.pl/wp-content/uploads/2022/04/01_Nieczapla-Salwador-Carlos-Pola-Filtr-v60-400x400.jpg",
    isNew: true,
  },
  {
    id: nanoid(),
    name: "Kolumbia Diego Bermudez",
    weight: 200,
    price: 80,
    imgUrl: null,
    isNew: false,
  },
  {
    id: nanoid(),
    name: "Etiopia Nensebo",
    weight: 250,
    price: 53,
    imgUrl: null,
    isNew: false,
  },
];

export default coffees;
