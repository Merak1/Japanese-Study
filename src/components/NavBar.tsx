import { Outlet, Link } from "react-router-dom";

import { ReactFuri } from "react-furi";
import React from "react";
// import FuriWrap from "./";

const NavBar = () => {
  return (
    <>
      <h1 className="text-3xl ">Japanese</h1>
      <FuriWrap color="red" bold="bold">
        <ReactFuri word="日本語" reading="にほんご" />
      </FuriWrap>
      <div className="flex justify-center gap-5">
        <div>
          <Link to={`genkiSummary`}>genkiSummary</Link>
        </div>
        <div>Words</div>
        <div>Words</div>
      </div>
    </>
  );
};

export default NavBar;
