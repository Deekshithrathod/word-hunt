import FormBox from "../../components/FormBox/FormBox";
import "./Waitlist.css";
import bg from "/gaudmire.png";
import { RoughNotation } from "react-rough-notation";

const Waitlist = () => {
  return (
    <main>
      <img src={bg} />
      <header>
        <h1>WordHunt</h1>
        <span>.ai</span>
      </header>
      <div className="liner">
        Join the
        <RoughNotation
          type="highlight"
          show={true}
          color="#FFEECC"
          padding={10}>
          <span>Waitlist</span>
        </RoughNotation>
      </div>

      <FormBox />
    </main>
  );
};

export default Waitlist;
