import React from "react";
import "./User.css";

export interface UserInt {
  name: string;
  age?: string;
  job: string;
  deleteUser: () => void;
}

const User: React.FC<UserInt> = ({ name, age, job, deleteUser }) => {
  return (
    <div className="card">
      <div className="row">
        <h2>Name: {name}</h2>
        <p>John</p>
      </div>
      <hr />

      {age && (
        <>
          <div className="row">
            <h2>Age: {age} </h2>
            <p>2</p>
          </div>
          <hr />
        </>
      )}

      <div className="row">
        <h2>Job: {job} </h2>
        <p>permit agent</p>
      </div>
      <button className="deleteBtn" onClick={deleteUser}>
        Delete
      </button>
    </div>
  );
};

export default User;
