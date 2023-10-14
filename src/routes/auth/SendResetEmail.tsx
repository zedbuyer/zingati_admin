import { Helmet } from "react-helmet";

const SendResetEmail = () => {
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
        <form action="" className="w-full flex flex-col">
          <div className="form-control w-full mb-3">
            <label htmlFor="#email" className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Hint: The email you usually use to log in"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-primary mt-6">Send Link</button>
        </form>
      </div>
    </>
  );
};

export default SendResetEmail;
