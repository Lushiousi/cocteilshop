import './faqcontains.modules.css'
import Questions from '../Questions/Questions'

const Faqcontains = () => {
    const cardsObj = [
        {
            text: "Как сделать заказ?",
        },
        {

            text: "Способы оплаты",
        },
        {
            text: "Доставка",
        },
        {
            text: "Сроки доставки",
        },
        {
            text: "Как сделать обмен?",
        },
        {
            text: "Как сделать возврат?",
        },
        {
            text: "Куда и когда вернутся деньги за возвращённый товар?",
        },
    ];
    let objMap = cardsObj.map(({ text }) => (
        <Questions text={text} />
    ));
    return (
        <div className='faqcontains'>
            {objMap}
        </div>
    )
}

export default Faqcontains