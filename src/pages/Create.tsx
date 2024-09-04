import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center bg-gray-400 h-screen w-full">
      <div className="w-[50%] bg-white rounded shadow-md px-5 pt-3 pb-5 border">
        <h1 className="text-3xl">Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="m-2">
            <label htmlFor="name">Name: </label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="m-2">
            <label htmlFor="email">Email: </label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="m-3">
            <label htmlFor="phone">Phone: </label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone"
              name="phone"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="bg-green-500 m-6 p-2 rounded-lg">Submit</button>
          <Link to="/">
            <button className="bg-blue-300 p-2 rounded-lg">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
