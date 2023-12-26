import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [student, setStudent] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/update/${id}`, { name, email })
      .then((res) => {
        res.data !== "Cannot update the student!" && navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/${id}`)
      .then((res) => {
        setStudent(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    setName(student.name);
    setEmail(student.email);
  }, [id, student.name, student.email]);

  return (
    <div>
      <h1 className="mb-10 text-3xl font-bold text-blue-500">
        Update the Student
      </h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-5 cursor-pointer">
          <h4 className="mb-3">Name</h4>
          <input
            type="text"
            placeholder="Enter a name"
            className="w-full px-5 py-3 border-2 outline-none focus:border-blue-500 suration-300"
            onChange={(e) => {
              setName(e.target.value);
            }}
            defaultValue={student.name}
          />
        </label>
        <label className="cursor-pointer">
          <h4 className="mb-3">Email</h4>
          <input
            type="text"
            placeholder="Enter an email"
            className="w-full px-5 py-3 border-2 outline-none focus:border-blue-500 suration-300"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            defaultValue={student.email}
          />
        </label>
        <div className="flex items-center justify-between mt-10">
          <Link to="/">
            <span className="text-4xl cursor-pointer select-none">🔙</span>
          </Link>
          <button className="px-5 py-3 text-white duration-300 bg-green-600 rounded-md active:scale-95">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateStudent;
