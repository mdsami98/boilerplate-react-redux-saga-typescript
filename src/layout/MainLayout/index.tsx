import React, { Children } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MainFooter from "./Footer";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
const MainLayout = ({ children, pageTitle }: any) => {
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

      <MainFooter/>
    </HelmetProvider>
  );
};

export default MainLayout;
