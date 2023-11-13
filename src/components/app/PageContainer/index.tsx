import React from "react";
import { Helmet } from "react-helmet";

interface PageContainerProps extends React.PropsWithChildren {
  title: string;
}

const PageContainer = (props: PageContainerProps) => {
  return (
    <>
      <Helmet title={props.title} />
      <div className="h-screen flex-1 px-10 py-20">
        <h1 className="font-semibold text-3xl mb-10">{props.title}</h1>
        {props.children}
      </div>
    </>
  );
};

export default PageContainer;
