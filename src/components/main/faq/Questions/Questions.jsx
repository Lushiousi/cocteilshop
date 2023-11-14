import './Questions.modules.css'

const Questions = ({text}) => {
    return(
        <section className='questions'>
            <label>{text}</label>
            <button className='plus'>+</button>
        </section>
    )
}

export default Questions