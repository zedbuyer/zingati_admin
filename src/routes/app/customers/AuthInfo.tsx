import { useFormik } from "formik";
import { authInfoRoute } from "../../../utils/AppRoutesConfig";
import { authInfoSchema } from "../../../utils/form_validators/customer/edit_authinfo";
import { useMutation } from "@tanstack/react-query";
import { saveAuthInfo } from "../../../utils/queries/app/customers";
import { forgotPasswordQuery } from "../../../utils/queries/auth";

const AuthInfo = () => {
  const loaderData = authInfoRoute.useLoader();

  const customerData = loaderData.data.data.attributes;

  const { mutate: sendForgotPassword, isPending: sendingForgotPassword } =
    useMutation({
      mutationFn: forgotPasswordQuery,
      mutationKey: ["sendForgotPassword"],
      onSuccess: async () => {
        alert("Email sent!");
      },
      onError: async () => {
        alert("Unable to send email.");
      },
    });

  const handleForgotPassword = () => {
    sendForgotPassword({
      email: customerData.auth_info.data.attributes.email,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: saveAuthInfo,
    onSuccess: async () => {
      alert("Saved!");
    },
    onError: async () => {
      alert("Unable to save data. Try again");
    },
  });

  const { handleChange, isValid, values, handleSubmit, errors } = useFormik({
    initialValues: {
      email: customerData.auth_info.data.attributes.email,
      username: customerData.auth_info.data.attributes.username,
    },
    validationSchema: authInfoSchema,
    onSubmit: (values) => {
      if (isValid) {
        // perform submission here.
        mutate({ userId: customerData.auth_info.data.id, auth_info: values });
      }
    },
  });

  const blockUserForm = useFormik({
    initialValues: {
      blocked: customerData.auth_info.data.attributes.blocked,
    },
    onSubmit: (formValues) => {
      // TODO: Do something here
      const shouldPerformChange: boolean = window.confirm(
        "Are you sure you want to change this?"
      );
      if (shouldPerformChange) {
        mutate({
          userId: customerData.auth_info.data.id,
          auth_info: {
            blocked: Boolean(formValues.blocked),
          },
        });
      }
    },
  });

  return (
    <div className="mt-5">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="w-full grid grid-cols-2 gap-4 mb-5">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              id="username"
              onChange={handleChange}
              type="email"
              value={values.username}
              className="input input-bordered"
            />
            <div className="label">
              <span className="label-text-alt">
                {errors.username
                  ? `${errors.username}`
                  : "We use this when the user logs in"}
              </span>
            </div>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Email address</span>
            </div>
            <input
              type="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              className="input input-bordered"
            />
            <div className="label">
              <span className="label-text-alt">
                {errors.email
                  ? `${errors.email}`
                  : "We use this when contacting the user"}
              </span>
            </div>
          </label>
        </div>
        <div className="flex flex-row gap-4">
          <button
            disabled={isPending}
            className="btn btn-primary"
            type="submit"
          >
            {isPending ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Save details"
            )}
          </button>
          <button
            onClick={handleForgotPassword}
            className="btn btn-primary"
            type="button"
            disabled={sendingForgotPassword}
          >
            {sendingForgotPassword ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Send Password Reset"
            )}
          </button>
        </div>
      </form>
      <div className="divider mt-10">
        Do not change anything here if you're not authorized.
      </div>
      <form onSubmit={blockUserForm.handleSubmit}>
        <div className="form-control w-80">
          <label className="cursor-pointer label">
            <span className="label-text">Block this user from logging in</span>
            <input
              type="checkbox"
              id="blocked"
              onChange={blockUserForm.handleChange}
              className="toggle toggle-primary toggle-error"
              checked={blockUserForm.values.blocked}
            />
          </label>
          <div className="label">
            <span
              className={`label-text-alt ${
                customerData.auth_info.data.attributes.blocked
                  ? "text-red-500"
                  : "text-green-500"
              } font-bold`}
            >
              This user is{" "}
              {customerData.auth_info.data.attributes.blocked
                ? "blocked"
                : "not blocked"}
            </span>
          </div>
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="btn btn-error mt-3"
        >
          {isPending ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Save this status"
          )}
        </button>
      </form>
    </div>
  );
};

export default AuthInfo;
