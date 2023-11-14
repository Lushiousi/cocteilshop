import "./mainpage.modules.css";
import Catalogimgs from "./catalogimgs/catalogimgs";
import Catalogtext from "./cataogtext/catalogtext";
import Catalogbtn from "./catalogbtn/catalogbtn";
import Semicircle from "./semicircle/semicircle";

const MainPage = () => {
  return (
    <section className="mainpage">
        <Catalogimgs/>
        <Catalogtext/>
        <Catalogbtn/>
        <Semicircle/>
    </section>
  );
};
export default MainPage;
