import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";
import { forgotPasswordQuery } from "../../utils/queries/auth";
import { useState } from "react";
import { forgotPasswordSchema } from "../../utils/form_validators/auth";
import { FaCheckCircle } from "react-icons/fa";

const SendResetEmail = () => {
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const { mutate: sendRequest, status } = useMutation({
    mutationFn: forgotPasswordQuery,
    onSuccess: async () => {
      setEmailSent(true);
    },
  });
  const { handleSubmit, handleChange, isValid } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      if (isValid) {
        // perform operation with values
        sendRequest(values);
      }
    },
  });

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <div className="w-1/2">
        <h1 className="text-4xl font-medium mb-3">Forgot Password</h1>
        <p className="mb-10">
          Not to worry, we'll take care of that for you. Enter your email
          address below to receive a link to reset your password.
        </p>
        <div
          className={`w-full flex-col items-center ${
            emailSent ? "flex" : "hidden"
          }`}
        >
          <FaCheckCircle
            className="mb-4"
            style={{ fontSize: 50, color: "#00bfa5" }}
          />
          <p className="text-center">
            Please check your mailbox for a validation email to begin the next
            step.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`w-full ${emailSent ? "hidden" : "flex"} flex-col`}
        >
          <div className="form-control w-full mb-3">
            <label htmlFor="#email" className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              placeholder="Hint: The email you usually use to log in"
              className="input input-bordered"
            />
          </div>
          <button
            type="submit"
            disabled={status === "pending"}
            className={`btn btn-primary mt-6 ${
              status === "pending" ? "loading" : null
            }`}
          >
            Send Link
          </button>
        </form>
      </div>
    </>
  );
};

export default SendResetEmail;
