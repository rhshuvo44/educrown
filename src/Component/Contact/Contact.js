import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container py-5">
      <h3 className="fs-1 fw-bold  text-center">
        Any question in mind? Don’t Worry Contact Us.
      </h3>
      <div className="row py-4">
        <div className="col-md-6 m-auto">
          <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
            <div class="col-md-6">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                {...register("name")}
              />
            </div>
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                placeholder="subject"
                {...register("subject")}
              />
            </div>
            <div class="col-12">
              <textarea class="form-control" placeholder="Message"></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
