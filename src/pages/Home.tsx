import axios from "axios";
import { useEffect, useState } from "react";
import User from "../utils/interface";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 h-full">
      <h1 className="text-4xl m-3">List of Users</h1>
      <div className="w-[75%] rounded bg-white border shadow p-4">
        <div className="flex justify-end">
          <Link to="/create">
            <button className="bg-green-500 p-2 rounded-xl">ADD +</button>
          </Link>
        </div>
        <table className="p-6 w-[100%]">
          <thead className="text-left">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/read/${user.id}`}>
                    <button className="mr-6 p-1 rounded-md bg-blue-300">
                      Read
                    </button>
                  </Link>
                  <button className="mr-6 p-1 rounded-md bg-blue-700">
                    Edit
                  </button>
                  <button className="p-1 rounded-md bg-red-600 mb-3">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
