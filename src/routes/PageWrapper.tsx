import React, { Children } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CustomFooter from "../components/footer";
import SideBar from "../components/side-bar";
import TopBar from "../components/top-bar";
const PageWrapper = ({ children, pageTitle }: any) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <TopBar />

      <div className="grid grid-cols-12 gap-2 h-auto">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-10 mt-5">{children}</div>
      </div>

      <CustomFooter/>
    </HelmetProvider>
  );
};

export default PageWrapper;
