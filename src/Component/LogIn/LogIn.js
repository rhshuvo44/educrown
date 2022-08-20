import React from "react";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from "../../firebase.init";
import Looding from "../Shared/Looding";
const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

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
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  const hangleGoogle = () => {
    signInWithGoogle();
  };
  return (
    <div className="container text-center py-5">
      <h2>Log In</h2>
      <div className="row py-5">
        <div className="col-md-6 m-auto shadow-lg p-5 mb-5 bg-body rounded">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="name@example.com"
                {...register("email")}
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="enter your password"
                {...register("password")}
              />
            </div>

            <input class="btn btn-dark" type="submit" value="Log In" />
          </form>
          <p>
            Are You no Member ? <Link to="/signUp">Sing Up</Link>
          </p>
          <h5>Sing in with</h5>
          <button onClick={hangleGoogle}>
          <FaGoogle  />
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default LogIn;
