import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import User from "../utils/interface";

const Update = () => {
  // const [data, setData] = useState<User | null>(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleUpdate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center bg-gray-400 h-screen w-full">
      <div className="w-[50%] bg-white rounded shadow-md px-5 pt-3 pb-5 border">
        <h1 className="text-3xl">Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className="m-2">
            <label htmlFor="name">Name: </label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="name"
              value={values?.name || ""}
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
              value={values?.email || ""}
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
              value={values?.phone || ""}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="bg-green-500 m-6 p-2 rounded-lg">Update</button>
          <Link to="/">
            <button className="bg-blue-300 p-2 rounded-lg">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
