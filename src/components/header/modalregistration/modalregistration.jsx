import "./modalregistration.modules.css";

function Modalregistration(props) {
  return (
    <div>
    <section>
  </section>
    <div className="App">
      {props.showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="closecircle">
              <span
                className="close"
                style={{ fontSize: 40 }}
                onClick={props.closeModal}
              >
                &times;
              </span>
            </div>
            <form>
              <h2>Registration</h2>
              <label htmlFor="username"></label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Имя"
              />
              <label htmlFor="email"></label>
              <input type="email" id="email" name="email" placeholder="Email" />
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
              />
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Modalregistration;
