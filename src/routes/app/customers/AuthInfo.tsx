import { useFormik } from "formik";
import { authInfoRoute } from "../../../utils/AppRoutesConfig";
import { authInfoSchema } from "../../../utils/form_validators/customer/edit_authinfo";

const AuthInfo = () => {
  const loaderData = authInfoRoute.useLoader();

  const customerData = loaderData.data.data.attributes;

  const { handleChange, isValid, values, handleSubmit, errors } = useFormik({
    initialValues: {
      email: customerData.auth_info.data.attributes.email,
      username: customerData.auth_info.data.attributes.username,
    },
    validationSchema: authInfoSchema,
    onSubmit: (values) => {
      // do something
      if (isValid) {
        // perform submission here.
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
              id="email"
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
          <button className="btn btn-primary" type="submit">
            Save details
          </button>
          <button className="btn btn-primary" type="button">
            Send Password Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthInfo;
