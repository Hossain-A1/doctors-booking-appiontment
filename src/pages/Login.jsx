import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { z } from "zod";
import { AppContext } from "../context/AppContext";
import {
  loginSchema,
  registrationSchema,
} from "../validations/inputValidations";
const Login = () => {
  const { serverURL, setToken } = useContext(AppContext);
  const [state, setState] = useState("Sign Up");
  const [error, setErrors] = useState({});
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const loginInputData = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let schema;
      let newURL = serverURL;

      if (state === "Sign Up") {
        schema = registrationSchema;
        newURL += "/api/auth/register";
      } else {
        schema = loginSchema;
        newURL += "/api/auth/login";
      }

      schema.parse(loginData);

      const resData = await axios.post(newURL, loginData);

      if (resData.data.success) {
        setLoginData({
          name: "",
          email: "",
          password: "",
        });

        // Set token in localStorage and context
        const token = resData.data.payload;
        localStorage.setItem("token", token);
        setToken(token);
        navigate("/");
      } else {
        throw new Error("Something went worng");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Extract and set validation errors
        const formattedErrors = error.format();

        // Flatten the error object if needed
        const flatErrors = Object.keys(formattedErrors).reduce((acc, key) => {
          if (formattedErrors[key]._errors) {
            acc[key] = formattedErrors[key]._errors[0];
          }
          return acc;
        }, {});

        setErrors(flatErrors);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <main className='min-h-[80vh] flex items-center'>
      <form
        onSubmit={handleLogin}
        className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'
      >
        <p className='text-2xl font-semibold'>
          {state === "Sign Up" ? "Create an account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "Sign up" : "Log in"} to book
          appointment
        </p>

        {state === "Sign Up" && (
          <div className='w-full'>
            <label htmlFor='name'></label>
            <input
              className={` ${
                error.name ? " bg-red-100" : "bg-transparent"
              } border border-zinc-300 rounded w-full p-2 mt-1`}
              name='name'
              type='text'
              placeholder='Name'
              onChange={loginInputData}
              value={loginData.name}
            />
            {error.name && <p className="text-red-600 text-xs font-semibold">{error.name}</p>}
          </div>
        )}
        <div className='w-full'>
          <label htmlFor='email'></label>
          <input
           className={` ${
            error.email ? " bg-red-100" : "bg-transparent"
          } border border-zinc-300 rounded w-full p-2 mt-1`}
            name='email'
            type='email'
            placeholder='Email'
            onChange={loginInputData}
            value={loginData.email}
          />
           {error.email && <p className="text-red-600 text-xs font-semibold">{error.email}</p>}
        </div>
        <div className='w-full'>
          <label htmlFor='password'></label>
          <input
     className={` ${
      error.password ? " bg-red-100" : "bg-transparent"
    } border border-zinc-300 rounded w-full p-2 mt-1`}
            name='password'
            type='password'
            placeholder='Password'
            onChange={loginInputData}
            value={loginData.password}
          />
           {error.password && <p className="text-red-600 text-xs font-semibold">{error.password}</p>}
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>
          {state === "Sign Up" ? "Create an account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className='cursor-pointer underline text-primary'
            >
              Login
            </span>
          </p>
        ) : (
          <p>
            Do not have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className='cursor-pointer underline text-primary'
            >
              Sign up
            </span>{" "}
          </p>
        )}
      </form>
    </main>
  );
};

export default Login;
