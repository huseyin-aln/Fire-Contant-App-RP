import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  console.log(name, phone, gender);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center  ">
      <h1
        className="text-center bg-white rounded-2 fs-3 mb-5 p-2"
        style={{ width: "16rem" }}
      >
        <span className="text-primary">{"<h-aln />"}</span> DESIGN
      </h1>

      <h1
        className="text-center bg-white rounded-2 fs-3 mb-2 p-2"
        style={{ width: "16rem" }}
      >
        ADD CONTACT
      </h1>

      <form
        className="m-auto bg-white p-3 rounded-2"
        style={{ width: "16rem", height: "15rem" }}
      >
        <div className="mb-3 wrapper">
          <BsFillPersonFill className="icon" />
          <input
            type="text"
            className="form-control ps-4"
            id="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3 wrapper">
          <AiFillPhone className="icon" />
          <input
            type="number"
            className="form-control ps-4"
            id="phone"
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setGender(e.target.value)}
          >
            <option defaultValue>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "14rem" }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
