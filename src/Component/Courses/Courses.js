import React from "react";
import Course from "../Course/Course";

const courses = [
  {
    "id": "01",
    "title": "web design",
    "img":"https://i.ibb.co/7jSrbV1/blog-1.jpg",
    "price": "220",
    "short":
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, dolorem. Enim fugit odio tempore impedit, dolore at soluta error animi.",
  },
  {
    "id": "02",
    "title": "web design",
    "price": "220",
    "img":"https://i.ibb.co/xC1nsF8/blog-3.jpg",
    "short":
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, dolorem. Enim fugit odio tempore impedit, dolore at soluta error animi.",
  },
  {
    "id": "03",
    "title": "web design",
    "price": "220",
    "img":"https://i.ibb.co/86D3K0X/blog-4.jpg",
    "short":
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, dolorem. Enim fugit odio tempore impedit, dolore at soluta error animi.",
  },
];

const Courses = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold fs-1 text-center">Our Trending Courses</h2>
      <div className="row py-5">
        {
          courses.map((course)=><Course id={course.id} course={course}/>)
        }
      </div>
    </div>
  );
};

export default Courses;
