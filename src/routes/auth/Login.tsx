import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="w-1/2">
        <h1 className="text-4xl font-medium my-10">Login to continue</h1>
        <form className="w-fullf flex flex-col">
          <div className="form-control w-full mb-3">
            <label htmlFor="#username" className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="email"
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
              placeholder="🙈 Enter your password"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-primary mt-6">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
