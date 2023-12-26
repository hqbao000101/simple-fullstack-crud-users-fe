import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListStudent = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/delete/${id}`);
      if (res.data !== "Cannot delete the student!") {
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Link to="/add-student">
        <button className="px-5 py-3 mb-10 duration-300 bg-green-300 rounded-md hover:bg-green-500 active:scale-95">
          Add More
        </button>
      </Link>
      <table className="w-full text-left student-table">
        <thead>
          <tr className="text-2xl text-blue-500">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {student?.map((item, index) => {
            return (
              <tr key={index} className="border-b border-gray-300">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td className="text-center">
                  <button
                    className="px-5 py-3 mt-5 mb-3 text-white duration-300 bg-red-500 rounded-md hover:bg-red-600 me-3 active:scale-95 md:mb-0"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={`/update/${item.id}`}>
                    <button className="px-5 py-3 mb-5 text-white duration-300 bg-yellow-500 rounded-md hover:bg-yellow-600 me-3 active:scale-95">
                      Update
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListStudent;
