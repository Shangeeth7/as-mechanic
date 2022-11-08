import React from "react";
import { useNavigate } from "react-router-dom";

function Mechanic({ mechanic }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${mechanic._id}`)}
    >
      <h1 className="card-title">
        {mechanic.firstName} {mechanic.lastName}
      </h1>
      <hr />
      <p>
        <b>Specialized in : </b>
        {mechanic.specialization}
      </p>
      <p>
        <b>Experience : </b>
        {mechanic.experience} years
      </p>

      <p>
        <b>Timings : </b>
        {mechanic.timings[0]} - {mechanic.timings[1]}
      </p>
      <p>
        <b>Phone Number : </b>
        {mechanic.phoneNumber}
      </p>
    </div>
  );
}

export default Mechanic;
