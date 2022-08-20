import React from "react";
import { useNavigate } from "react-router-dom";

const Course = ({ course }) => {
  const { id, title, price, short, img } = course;
  const navigate = useNavigate();
  const handlePurche = (id) => {
    navigate(`/parches/${id}`);
  };
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{short}</p>
          <h2>Price : $ {price}</h2>
          <button onClick={() => handlePurche(id)} className="btn btn-primary">
          Enroll the Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
