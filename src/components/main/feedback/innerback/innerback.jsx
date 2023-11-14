import Inputs from "../inputs/inputs";
import Checkboxes from "../checkboxes/checkboxes";
import Sendbtn from "../send/sendbtn";
import Semicirclethird from "../semicirclethird/semicirclethird";
import Semicirclefilled from "../semicirclefilled/semicirclefilled";

const Innerback = () => {
    return(
        <section className="innerback">
            <p>Приглашаем  к сотрудничеству производителей и поставщиков<br></br> одежды, обуви и аксессуаров</p>
            <Inputs/>
            <Checkboxes/>
            <Sendbtn/>
            <Semicirclethird/>
            <Semicirclefilled/>
        </section>
    )
}

export default Innerback
