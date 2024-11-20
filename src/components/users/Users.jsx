import React from "react";
import "./Users.css";
import male from "../../assets/png-clipart-computer-icons-businessperson-company-man-icon-company-people.png";
import female from "../../assets/kisspng-computer-icons-woman-user-clip-art-5b1f6aa8cd7b53.6682503915287855768417.jpg";
import { useDispatch } from "react-redux";
import { remouFromUsers } from "../../context/userSlice";

function Users({ data }) {
  const dispetch = useDispatch();
  return (
    <div className="users__wrapper">
      {data?.map((user) => (
        <div key={user.id} className="users__card">
          <img src={user.gener === "male" ? male : female} alt="" />
          <h2>{user.name}</h2>
          <p>{user.pro}</p>
          <p>{user.age}</p>
          <button onClick={() => dispetch(remouFromUsers(user))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Users;
