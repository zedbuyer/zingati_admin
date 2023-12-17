import PageContainer from "../../../components/app/PageContainer";
import { Link, Outlet } from "@tanstack/react-router";

export default function EditCustomer() {
  return (
    <PageContainer title="Customer">
      <div className="card w-full bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title mb-4">Customer Title here</h2>
          <div role="tablist" className="tabs tabs-boxed">
            <Link
              role="tab"
              className="tab"
              // className={`tab ${currentTab === map.key ? "tab-active" : null}`}
            >
              General Information
            </Link>
            <Link role="tab" className="tab">
              Authentication Information
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </PageContainer>
  );
}
