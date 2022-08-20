import React from "react";

const Course = ({ course }) => {
  const { title, price, short, img } = course;
  return (
    <div className="col-md-4">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{short}</p>
          <h2>Price : $ {price}</h2>
          <a href="f" class="btn btn-primary">
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Course;
