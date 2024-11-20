import React, { useState } from "react";
import "./CreateUser.css";
import { useDispatch } from "react-redux";
import { addToUsers } from "../../context/userSlice";

function CreateUser() {
  const [name, setName] = useState("");
  const [pro, setPro] = useState("");
  const [age, setAge] = useState("");
  const [gener, setGenner] = useState("");

  const dispatch = useDispatch();
  console.log(gener);

  const hendliSubmet = (e) => {
    e.preventDefault();

    let newUser = {
      id: new Date().getTime(),
      name,
      pro,
      age: +age,
      gener,
    };

    dispatch(addToUsers(newUser));

    setName("");
    setPro("");
    setAge("");
    setGenner("");
  };

  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={hendliSubmet} className="create__user-form" action="">
        <input
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          value={pro}
          required
          onChange={(e) => setPro(e.target.value)}
          type="text"
          placeholder="profession"
        />
        <input
          value={age}
          required
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="age"
        />
        <select
          value={gener}
          onChange={(e) => setGenner(e.target.value)}
          name=""
          required
          id=""
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
