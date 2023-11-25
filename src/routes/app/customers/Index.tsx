/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import PageContainer from "../../../components/app/PageContainer";
import { fetchAllCustomers } from "../../../utils/queries/app/customers";
import { Link } from "@tanstack/react-router";
import { FaPencil } from "react-icons/fa6";

export default function Customers() {
  const { data, status } = useQuery({
    queryKey: ["customers"],
    queryFn: fetchAllCustomers,
  });

  const renderRows = () => {
    return data?.data.data.map((customer: any) => {
      const isConfirmed =
        customer.attributes.auth_info.data.attributes.confirmed;
      return (
        <tr>
          <td>{`${customer.attributes.first_name} ${customer.attributes.last_name}`}</td>
          <td>{`${customer.attributes.auth_info.data.attributes.email}`}</td>
          <td>
            <span
              className={`badge ${
                isConfirmed ? "badge-success" : "badge-warning"
              }`}
            >
              {isConfirmed ? "Confirmed" : "Not confirmed"}
            </span>
          </td>
          <td>
            {new Date(customer.attributes.createdAt).toLocaleDateString()}
          </td>
          <td>
            <Link
              to="$customerId"
              params={{ customerId: customer.id }}
              className="btn btn-sm"
            >
              <FaPencil />
            </Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <PageContainer title="All Customers">
      <div className="w-100">
        <div className="card w-full bg-base-100 shadow">
          <div className="card-body grid grid-cols-4 gap-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">First name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Last name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Confirmed</span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
                <option value="">All</option>
                <option value="0">Unconfirmed</option>
                <option value="1">Confirmed</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Join date start</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Join date end</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="join items-center">
              <button className="btn join-item">Search</button>
              <button className="btn join-item">Clear all</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 mt-4">
        <div className="card w-full bg-base-100 shadow">
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email address</th>
                    <th>Confirmed</th>
                    <th>Date joined</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {status === "pending" ? (
                    <span className="loading loading-ring loading-lg"></span>
                  ) : status === "error" ? (
                    <div>Unable to load customers</div>
                  ) : (
                    renderRows()
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
