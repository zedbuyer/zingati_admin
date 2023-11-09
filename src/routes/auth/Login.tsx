import { Helmet } from "react-helmet";
import { Link, useNavigate } from "@tanstack/react-router";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../utils/queries/auth/index.ts";
import { useContext } from "react";
import AuthContext from "../../utils/state/contexts/AuthContext.ts";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { mutate, status } = useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      dispatch({
        type: "LOGIN",
        payload: {
          ...response.data,
          loggedIn: true,
        },
      });
      // Navigate to the main app page.
      navigate({ to: `/` });
    },
    onError: (error) => {
      if (error.message === "Network Error") {
        alert("Unable to connect to server. Try again.");
      } else {
        alert("Incorrect username or password");
      }
    },
  });
  const { handleSubmit, handleChange, isValid } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      if (isValid) {
        mutate(values);
      }
    },
  });
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="w-1/2">
        <h1 className="text-4xl font-medium mb-10">Login to continue</h1>
        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <div className="form-control w-full mb-3">
            <label htmlFor="#email" className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              onChange={handleChange}
              id="email"
              placeholder="Hint: alex@email.com"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="#password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              id="password"
              onChange={handleChange}
            />
          </div>
          <Link
            to="/auth/forgot-password"
            className="link mt-5 text-gray-500 justify-right hover:text-primary-content"
          >
            Forgot password?
          </Link>
          <button
            className={`btn btn-primary mt-6 ${
              status == "pending" ? "loading" : null
            }`}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
