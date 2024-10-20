import React, { useState } from "react";
import AnalyzerDescription from "./AnalyzerDescription";
import AnalyzerFunction from "./AnalyzerFunction";

function Analyzer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <AnalyzerDescription/>
            <hr className="mt-4 mb-4" />
            <AnalyzerFunction/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analyzer;
