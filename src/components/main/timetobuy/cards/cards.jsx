import "./cards.modules.css";
import { BsSuitHeart } from "react-icons/bs";
import { GrShop } from "react-icons/gr";

const Cards = ({ image_card, text, price }) => {
  return (
    <section className="sale">
      <div className="cards">
        <img src={image_card} alt="image"/>
        <p className="price">{price} P</p>
        <div className="text_card">
          <p className="text-card">{text}</p>
          <div className="svgs">
            <BsSuitHeart style={{ fontSize: 30 }} />
            <GrShop style={{ fontSize: 30 }} />
          </div>
        </div>
        <button className="details">
             Подробнее 
          <svg className="hgf"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="4"
            viewBox="0 0 26 4"
            fill="none"          
          >
            <path
              d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z"
              fill="#121212"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Cards;
