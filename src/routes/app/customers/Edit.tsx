import PageContainer from "../../../components/app/PageContainer";
import { Link, Outlet } from "@tanstack/react-router";
import { customerRoute } from "../../../utils/AppRoutesConfig";

export default function EditCustomer() {
  const { customerId } = customerRoute.useParams();
  const {
    data: { data },
  } = customerRoute.useLoader();

  return (
    <PageContainer
      title={`${data.attributes.first_name} ${data.attributes.last_name}`}
    >
      <div className="card w-full bg-base-100 shadow">
        <div className="card-body">
          <div role="tablist" className="tabs tabs-boxed">
            <Link
              role="tab"
              className="tab"
              to="/customers/$customerId/"
              params={{ customerId }}
              activeProps={{ style: { fontWeight: "bold", color: "black" } }}
            >
              General Information
            </Link>
            <Link
              role="tab"
              className="tab"
              to="/customers/$customerId/auth-info"
              params={{ customerId }}
              activeProps={{ style: { fontWeight: "bold", color: "black" } }}
            >
              Authentication Information
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </PageContainer>
  );
}
