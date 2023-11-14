import './coop.modules.css'
import Titlecoop from "./titlecoop/titlecoop";
import Subtitlecoop from "./subtitlecoop/subtitlecoop";
import Firststrokecoop from "./firststrokecoop/firststrokecoop";
import Secondtitlecoop from "./secondtitlecoop/secondtitlecoop";
import Secondstrokecoop from "./secondstrokecoop/secondstrokecoop";

const Coop = () => {
    return (
        <section>
            <Titlecoop/>
            <Subtitlecoop/>
            <Firststrokecoop/>
            <Secondtitlecoop/>
           <Secondstrokecoop/>
        </section>
    )
}

export default Coop