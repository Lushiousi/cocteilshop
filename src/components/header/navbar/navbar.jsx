import "./navbar.modules.css"

const Navbar = (props) => {
    return (
        
        <div>
            {props.showModalcatalog && (
                <div className="navbar">
                    <div className="navbar-content" onClick={()=>{props.setShowModalcatalog(false)}}>
                        {props.showModalcatalog &&(
                            <div className="body">
                                <div className="logonavbar">
                                    <img src="logo.png" alt="logonav" className="logonav"/>
                                </div>
                                <div className="choosesection">
                                    <span>Женщинам</span>
                                    <span>Мужчинам</span>
                                    <span>Детям</span>
                                    <span>Обувь</span>
                                    <span>Игрушки</span>
                                    <span>Аксессуары</span>
                                    <span>Большие размеры</span>
                                    <span>Дополнительно</span>
                                    <span>Акции</span>
                                </div>
                            </div>)}    
                    </div>
                </div>
            )}
        </div>
    )
} 

export default Navbar