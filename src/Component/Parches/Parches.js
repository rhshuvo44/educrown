import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Parches.css";

const Parches = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const onSubmit = (data) => {
    toast(`Your Course id ${id}`);
  };
  return (
    <div className="container py-5" id="parches">
      <div className="row">
        <div className="col-md-8 m-auto">
          <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
            <div class="col-md-12">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter Your Full Name"
                {...register("name")}
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                {...register("inputAddress")}
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                {...register("inputAddress")}
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                {...register("city")}
              />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <select
                id="inputState"
                class="form-select"
                {...register("inputState")}
              >
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                {...register("inputZip")}
              />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Order Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Parches;
