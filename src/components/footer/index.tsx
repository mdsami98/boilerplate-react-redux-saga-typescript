import { Footer } from "flowbite-react";
import React from "react";

const CustomFooter = () => {
  return (
    <Footer className="flex flex-col">
      <Footer.Copyright href="#" by="Sami" year={2022} />
    </Footer>
  );
};

export default CustomFooter;
