import "./sales.modules.css";
import Cards from "../cards/cards";

const Sales = () => {
  const cardsObj = [
    {
      image_card: "./firstimage.jpg ",
      text: "Блузка женская классная",
      price: "50.00",
    },
    {
      image_card: "./secondimage.jpg",
      text: "Блузка женская классная",
      price: "50.00 ",
    },
    {
      image_card: "./thirdimage.jpg",
      text: "Блузка женская классная",
      price: "50.00",
    },
    {
      image_card: "./fourthimage.jpg",
      text: "Блузка женская классная",
      price: "50.00",
    },
  ];
  let objMap = cardsObj.map(({ image_card, text, price }) => (
    <Cards image_card={image_card} text={text} price={price} />
  ));
  return <div className="salescards">{objMap}</div>;
};

export default Sales;
