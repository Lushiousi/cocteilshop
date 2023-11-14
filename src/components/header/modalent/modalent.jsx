import "./modalent.modules.css"
import { GrShop } from "react-icons/gr";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai"
import { useState } from "react";
import Modallogin from "../modallogin/modallogin";


function Modalent(props) {
    const [showModallogin, setShowModallogin] = useState(false);

    const openModallogin = () => {
      setShowModallogin(true);
    };
  
    const closeModallogin = () => {
      setShowModallogin(false);
    };
    return (
        <div className="modalent-div">
            <Modallogin
                showModallogin={showModallogin}
                openModallogin={openModallogin}
                closeModallogin={closeModallogin}
            />
            <div className="modalent">
                {props.showModal && (
                    <div className="modal-modalent">
                        <div className="avasi">
                            <div className="avatarent"></div>
                            <button className="singinent" onClick={() => {openModallogin()}}>Войти</button>
                        </div>
                        <div className="btnsent">
                            <div className="cartent"><GrShop />
                                <label>Корзина</label>
                            </div>
                            <div className="favoritesent"><BsSuitHeart />
                                <label>Избранное</label>
                            </div>
                            <div className="showedent"><AiOutlineEye />
                                <label>Просмотренные</label>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modalent