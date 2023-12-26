import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/add-student", { name, email })
      .then((res) => {
        res.data !== "Cannot create the student!" && navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h1 className="mb-10 text-3xl font-bold text-blue-500">Add a Student</h1>
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
          />
        </label>
        <div className="flex items-center justify-between mt-10">
          <Link to="/">
            <span className="text-4xl cursor-pointer select-none">🔙</span>
          </Link>
          <button className="px-5 py-3 text-white duration-300 bg-green-600 rounded-md active:scale-95">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
