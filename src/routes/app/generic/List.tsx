/* eslint-disable @typescript-eslint/no-explicit-any */

import PageContainer from "../../../components/app/PageContainer";
import { Link, useRouter } from "@tanstack/react-router";
import * as configs from "../generic/configs.json";
import { useQuery } from "@tanstack/react-query";
import { fetchGenericList } from "../../../utils/queries/app/generic";
import { TableField } from "../../../utils/types/GenericTypes";
import { LiaPencilAltSolid } from "react-icons/lia";

const routeConfigs: any = configs;

const renderHeaders = (fields: [TableField]) => {
  return fields.map((field) => {
    return <td>{field.label}</td>;
  });
};

const renderCell = (field: TableField, values: any) => {
  if (field.parent) {
    const parentField = field.parent || "";
    const nestedValues = values[parentField]["data"]["attributes"];
    return <td>{nestedValues[field.name]}</td>;
  }

  return <td>{values[field.name]}</td>;
};

const renderRows = (data: any, fields: [TableField]) => {
  return data.map((datum: any) => {
    const values = datum.attributes;
    return (
      <tr>
        {fields.map((field) => {
          return renderCell(field, values);
        })}
        <td>
          <Link to="$itemId" params={{ itemId: datum.id }}>
            <span className="flex flex-row items-center gap-1">
              <LiaPencilAltSolid /> Edit
            </span>
          </Link>
        </td>
      </tr>
    );
  });
};

const List = () => {
  const {
    state: { resolvedLocation },
  } = useRouter();
  const route = resolvedLocation.pathname.substring(1);
  const routeInfo = routeConfigs.pages[route];

  const { data, status } = useQuery({
    queryKey: [routeInfo.title],
    queryFn: () =>
      fetchGenericList({ path: route, populate: routeInfo.populate }),
  });

  return (
    <PageContainer title={routeInfo.title}>
      <div className="w-100">
        <div className="card w-full bg-base-100 shadow"></div>
      </div>
      <div className="w-100 mt-4">
        <div className="card w-full bg-base-100 shadow">
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    {renderHeaders(routeInfo.fields)}
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {status === "pending" ? (
                    <span className="loading loading-ring loading-lg"></span>
                  ) : status === "error" ? (
                    <div>Unable to load data</div>
                  ) : (
                    renderRows(data?.data.data, routeInfo.fields)
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default List;
