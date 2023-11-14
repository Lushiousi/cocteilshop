import './faq.modules.css'
import Secondsemicircle from "./secondsemicircle/secondsemicircle";

const Faq = () => {
    return(
        <section className='faqtext'>
            <div className='maintext'>
                <label>Часто задаваемые вопросы</label>
            </div>
            <Secondsemicircle/>
        </section>
    )
}

export default Faq