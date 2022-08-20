import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from "../../firebase.init";
import Looding from "../Shared/Looding";
const SingUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (gError || error) {
    return toast(`${error.message}`)
    
  }
  if (loading || gLoading) {
    return <Looding/>
  }
  if (user || gUser) {
    navigate(from, { replace: true });
  }
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password)
  };
  const hangleGoogle = () => {
    signInWithGoogle();
  };
  return (
    <div className="container text-center py-5">
      <h2>Sing Up</h2>
      <div className="row py-5">
        <div className="col-md-6 m-auto shadow-lg p-5 mb-5 bg-body rounded">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                {...register("name")}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                {...register("email")}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your password"
                {...register("password")}
              />
            </div>

            <input className="btn btn-dark" type="submit" value="Log In" />
          </form>
          <p>
            Are You Member ? <Link to="/logIn">Log In</Link>
          </p>
          <h5>Sing in with</h5>
          <button onClick={hangleGoogle}>
            <FaGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
