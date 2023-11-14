import Modalregistration from "../modalregistration/modalregistration";
import "./modallogin.modules.css";
import { useState } from "react";

const Modallogin = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Modalregistration
        showModal={showModal}
        openModal={openModal}
        closeModal={closeModal}
      />

      <div>
        {props.showModallogin && (
          <div className="modallogin">
            <div className="modallogin-content">
              <div className="closecirclelogin">
                <span
                  className="close"
                  style={{ fontSize: 40 }}
                  onClick={props.closeModallogin}
                >
                  &times;
                </span>
              </div>
              <form>
                <h2>login</h2>
                <label htmlFor="username"></label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Имя"
                />
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Пароль"
                />
                <button type="submit">Отправить</button>
              </form>
              <button
                className="Register"
                onClick={() => {
                  if (showModal === false) setShowModal(true);
                  else setShowModal(false);
                }}
              >Register</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modallogin;
