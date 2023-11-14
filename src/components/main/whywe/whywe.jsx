import './whywe.modules.css'
import  ChatCircle from './chatcircle/chatcircle'
import UpCircle from './upcircle/upcircle'
import Titlewhywe from "./titlewhywe/titlewhywe";
import Firststrokewhywe from "./firststrokewhywe/firststrokewhywe";
import Secondstrokewhywe from "./secondstrokewhywe/secondstrokewhywe";

const WhyWe = () => {
    return(
        <section className='whywe'>
            <div className='circle2'></div>
            <Titlewhywe/>
            <Firststrokewhywe/>
            <Secondstrokewhywe/>
            <ChatCircle/>
            <UpCircle/>
        </section>
    )
}

export default WhyWe