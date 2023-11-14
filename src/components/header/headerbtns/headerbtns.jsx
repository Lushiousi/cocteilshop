import { AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { BsSuitHeart } from "react-icons/bs";
import { GrShop } from "react-icons/gr";
import { useState } from "react";
import Modalent from "../modalent/modalent";
import Navbar from "../navbar/navbar";

const Headerbtns = () => {
  //Profile
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  //Menu
  const [showModalcatalog, setShowModalcatalog] = useState(false);

  return (
    <header>
      <section className="NavBar">
        <Navbar
            showModalcatalog={showModalcatalog}
            setShowModalcatalog={setShowModalcatalog}
        />
      </section>
      <section className="modal-sec">
        <Modalent
          showModal={showModal}
          openModal={openModal}
          closeModal={closeModal} />
      </section>

      <section className="header">
        <div className="menu" onClick={() => {
          if (!showModalcatalog){setShowModalcatalog(true); console.log("Navbar open header");}
          else {setShowModalcatalog(false);console.log("Navbar close header");}
        }}>
          <AiOutlineMenu style={{ fontSize: 40 }} />
        </div>
        <div className="search">
          <GoSearch style={{ fontSize: 30 }} />
        </div>
        <input className="search_input" placeholder="Поиск" />
        <div className="profile" onClick={() => {
          if (!showModal) setShowModal(true)
          else setShowModal(false)
        }}>
          <RxAvatar style={{ fontSize: 30 }} />
        </div>
        <div className="favorites">
          <BsSuitHeart style={{ fontSize: 30 }} />
        </div>
        <div className="cart">
          <GrShop style={{ fontSize: 30 }} />
        </div>
      </section>
    </header>
  );
};
export default Headerbtns;
