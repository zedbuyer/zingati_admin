import { Helmet } from "react-helmet";

// TODO: Must have a way to access the URL params properly
const ResetPassword = () => {
  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <div className="w-1/2">
        <h1 className="text-4xl font-medium mb-3">Reset Password</h1>
        <p className="mb-10">
          You're almost done. Enter and confirm you new password to complete
          your password reset.
        </p>
        <form action="" className="w-full flex flex-col">
          <div className="form-control w-full mb-3">
            <label htmlFor="#password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder=""
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full mb-3">
            <label htmlFor="#confirmPassword" className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder=""
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-primary mt-6">Reset</button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
