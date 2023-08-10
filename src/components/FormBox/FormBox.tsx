import { useState } from "react";
import "./FormBox.css";

const FormBox = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    const userDetails = {
      fname,
      lname,
      email,
    };
  };

  return (
    <form action="">
      <div>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="firstname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="lastname"
          required
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={(e) => handleSumit(e)}>Submit</button>
    </form>
  );
};

export default FormBox;
