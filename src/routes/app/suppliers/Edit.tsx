import { Link, Outlet } from "@tanstack/react-router";
import PageContainer from "../../../components/app/PageContainer";
import { supplierRoute } from "../../../utils/AppRoutesConfig";

type PageTab = {
  title: string;
  slug: "" | "media-info" | "product-info" | "branch-info" | "auth-info";
};

const EditSupplier = () => {
  const { supplierId } = supplierRoute.useParams();
  const tabs: PageTab[] = [
    {
      title: "Basic Information",
      slug: "",
    },
    {
      title: "Media Information",
      slug: "media-info",
    },
    {
      title: "Product Information",
      slug: "product-info",
    },
    {
      title: "Branch Information",
      slug: "branch-info",
    },
    {
      title: "Authenticatio Information",
      slug: "auth-info",
    },
  ];

  return (
    <PageContainer title="Edit Supplier">
      <div className="card w-full bg-base-100 shadow">
        <div className="card-body">
          <div role="tablist" className="tabs tabs-boxed">
            {tabs.map((tab) => {
              return (
                <Link
                  to={`/suppliers/$supplierId/${tab.slug}`}
                  params={{ supplierId }}
                  role="tab"
                  className="tab"
                  activeProps={{
                    className: "tab tab-active",
                  }}
                  key={tab.title}
                >
                  {tab.title}
                </Link>
              );
            })}
          </div>
          <Outlet />
        </div>
      </div>
    </PageContainer>
  );
};

export default EditSupplier;
