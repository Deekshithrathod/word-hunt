import FormBox from "../../components/FormBox/FormBox";
import "./Waitlist.css";
import bg from "../../../public/gaudmire.png";

const Waitlist = () => {
  return (
    <main>
      <img src={bg} />
      <header>
        <h1>WordHunt</h1>
        <span>.ai</span>
      </header>

      <FormBox />
    </main>
  );
};

export default Waitlist;
