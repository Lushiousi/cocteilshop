import "./reviews_cards.modules.css";

const Reviews_cards = ({avatar, reviewText, date, fi}) => {
  return (
    <section className="reviews">
        <div className="avatar">
          <img src={avatar} alt="img" />
        </div>
        <div className="reviewText">
          <label>{reviewText}</label>
      </div>
      <section className="fi">
        <label>{fi}</label>
      </section>
        <section className="date">
          <label>{date}</label>
        </section>
      </section>
  );
};

export default Reviews_cards;
