import { useEffect, useState } from "react";
import User from "../utils/interface";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState<User | null>(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-400 h-screen w-full">
      <div className="w-[50%] bg-white rounded shadow-md px-5 pt-3 pb-5 border">
        <h1 className="text-3xl mb-6">Add a User</h1>
        {data ? (
          <>
            <div className="mb-2">
              <strong>Name:</strong> {data.name}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {data.email}
            </div>
            <div className="mb-2">
              <strong>Phone:</strong> {data.phone}
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
        <Link to={`/update/${id}`}>
          <button className="bg-green-500 m-6 p-2 rounded-lg">Edit</button>
        </Link>
        <Link to="/">
          <button className="bg-blue-300 p-2 rounded-lg">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Read;
