import React from "react";
import { useEffect } from "react";
import Content from "./Content";
import "./CfRating.css";

function CfRating() {
  return (
    <div className="tot">
      <div className="">
        <div className="flex justify-center px-4 md:px-10  py-6 xyz">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default CfRating;
