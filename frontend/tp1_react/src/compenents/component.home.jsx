import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../src/home.css";

export function Home() {
  return (
    <>
      <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
        <div className="w3-display-middle">
          <h1 className="w3-jumbo w3-animate-top">COMING SOON</h1>
          <hr className="w3-border-grey" style={{ margin: "auto", width: "40%" }} />
          <p className="w3-large w3-center">35 days left</p>
        </div>
        
      </div>
    </>
  );
}

