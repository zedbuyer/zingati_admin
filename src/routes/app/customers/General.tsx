import { useQuery } from "@tanstack/react-query";
import { generalInfoRoute } from "../../../utils/AppRoutesConfig";
import { fetchCustomer } from "../../../utils/queries/app/customers";

const General = () => {
  const { customerId } = generalInfoRoute.useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchCustomer(customerId),
    queryKey: ["custoner"],
  });

  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (isError) {
    return (
      <div className="p-3">
        <p>Unable to load data</p>
      </div>
    );
  }

  const customerData = data?.data.data.attributes;

  return (
    <form className="mt-5 flex w-full flex-col">
      <div className="w-full grid grid-cols-2 gap-4">
        <label className="form-control">
          <div className="label">
            <span className="label-text">First Name</span>
          </div>
          <input
            disabled
            type="text"
            placeholder="Your first name"
            className="input input-bordered"
            value={customerData.first_name}
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Last Name</span>
          </div>
          <input
            disabled
            type="text"
            placeholder="Your last name"
            className="input input-bordered"
            value={customerData.last_name}
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Notification ID</span>
          </div>
          <input
            disabled
            type="text"
            placeholder="Who do we send notifications to?"
            className="input input-bordered"
            value={customerData.ntoification_id}
          />
        </label>
        <div className="flex flex-row gap-4">
          <div className="form-control">
            <label className="cursor-pointer label">Get notifications</label>
            <input
              type="checkbox"
              disabled
              className="toggle toggle-primary"
              checked={customerData.get_notifications}
            />
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">Get emails</label>
            <input
              type="checkbox"
              disabled
              checked={customerData.get_emails}
              className="toggle toggle-primary"
            />
          </div>
        </div>
      </div>
      <button disabled className="btn btn-primary mt-5">
        Nothing to save
      </button>
    </form>
  );
};

export default General;
