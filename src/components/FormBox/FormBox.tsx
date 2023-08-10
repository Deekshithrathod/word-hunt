import "./FormBox.css";

const FormBox = () => {
  return (
    <form action="">
      <div>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="firstname"
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="lastname"
        />
      </div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
      />
      <button>Submit</button>
    </form>
  );
};

export default FormBox;
