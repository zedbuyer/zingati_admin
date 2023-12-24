const AuthInfo = () => {
  return (
    <div className="mt-5">
      <form className="flex flex-col">
        <div className="w-full grid grid-cols-2 gap-4 mb-5">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input type="email" className="input input-bordered" />
            <div className="label">
              <span className="label-text-alt">
                We use this when the user logs in
              </span>
            </div>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Email address</span>
            </div>
            <input type="email" className="input input-bordered" />
            <div className="label">
              <span className="label-text-alt">
                We use this when contacting the user
              </span>
            </div>
          </label>
        </div>
        <div className="flex flex-row gap-4">
          <button className="btn btn-primary">Save details</button>
          <button className="btn btn-primary">Send Password Reset</button>
        </div>
      </form>
    </div>
  );
};

export default AuthInfo;
